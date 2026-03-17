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
  res.render(join(__dirname, 'templates/index.ejs'), {help : helpTexts.scout, title: 'Scout', scriptName:'chiffer.js'});
});

app.use(express.static(path.join(__dirname, 'fonts')));
app.use(express.static(path.join(__dirname, 'styles')));
app.use(express.static(path.join(__dirname, 'scripts')));

server.listen(3000, () => {
  console.log('server running at http://localhost:3000');
});


const db = new Database('ciphers.db');
db.pragma('journal_mode = WAL');

const stmt = db.prepare('SELECT descr FROM Ciphers');
console.log(stmt.all());
