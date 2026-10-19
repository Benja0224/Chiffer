import express from 'express';
import { createServer } from 'node:http';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';
import path from 'node:path';
import Database from 'better-sqlite3';

const app = express();
const server = createServer(app);

const __dirname = dirname(fileURLToPath(import.meta.url));


app.get('/', (req, res) => {
  res.render(join(__dirname, 'templates/index.ejs'), {help : '', title: '', scriptName:''});
})
app.get('/404', (req, res) => {
  console.log("test");
  res.sendFile(join(__dirname, '404.html'));
});
app.get('/chiffer/:chiffer', (req, res, next) => {
  console.log(req.params.chiffer);
  let data = getData(req.params.chiffer);
  console.log(typeof data);
  if(typeof data == 'undefined'){
    console.log('rerouting');
    res.redirect('/404');
  }
  res.render(join(__dirname, 'templates/' + req.params.chiffer + '.ejs'), data);
});



app.use(express.static('public'));



server.listen(3000, () => {
  console.log('server running at http://localhost:3000');
});


const db = new Database('ciphers.db');
db.pragma('journal_mode = WAL');
const stmt = db.prepare('SELECT cipher_name, script_file, descr FROM Ciphers WHERE cipher_id = ?');


function getData(cipher){
  let obj = stmt.get(cipher);
  let out = typeof obj !== 'undefined' ? {help : obj.descr, title: obj.cipher_name, scriptName:obj.script_file} : undefined;
  return out;
};
