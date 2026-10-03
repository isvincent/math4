// Optional Node.js verification; the website itself has no dependencies.
const fs=require('fs'),path=require('path'),vm=require('vm'),crypto=require('crypto');const dir=__dirname;
const required=['index.html','style.css','data.js','app.js','extensions.js','textbook.pdf',...Array.from({length:18},(_,i)=>`pages/page-${String(i+1).padStart(2,'0')}.jpg`)];
for(const file of required){if(!fs.existsSync(path.join(dir,file)))throw Error('Missing '+file)}
for(const file of ['data.js','extensions.js','app.js'])new vm.Script(fs.readFileSync(path.join(dir,file),'utf8'),{filename:file});
const html=fs.readFileSync(path.join(dir,'index.html'),'utf8');for(const match of html.matchAll(/(?:src|href)="([^"]+)"/g)){const ref=match[1];if(ref.startsWith('data:')||ref.startsWith('#'))continue;if(/^(https?:|\/)/.test(ref))throw Error('Expected relative local asset: '+ref);if(!fs.existsSync(path.join(dir,ref)))throw Error('Missing HTML asset '+ref)}
const hashes=Object.fromEntries(required.map(file=>[file,crypto.createHash('sha256').update(fs.readFileSync(path.join(dir,file))).digest('hex')]));const manifest=path.join(dir,'files.sha256.json');
if(process.argv.includes('--refresh-hashes'))fs.writeFileSync(manifest,JSON.stringify(hashes,null,2)+'\n');else{const expected=JSON.parse(fs.readFileSync(manifest,'utf8'));for(const file of required)if(expected[file]!==hashes[file])throw Error('Checksum mismatch: '+file)}
if(!fs.existsSync(path.join(dir,'.nojekyll')))throw Error('Missing .nojekyll');
console.log(JSON.stringify({ok:true,homepage:'index.html',localAssets:required.length,textbookPages:18,javascriptFiles:3,hashesVerified:!process.argv.includes('--refresh-hashes')}));
