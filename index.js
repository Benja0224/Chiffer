import express from 'express';
import { createServer } from 'node:http';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';
import path from 'node:path';

const app = express();
const server = createServer(app);

const __dirname = dirname(fileURLToPath(import.meta.url));


app.get('/', (req, res) => {
  res.sendFile(join(__dirname, 'index.html'));
});

app.use(express.static(path.join(__dirname, 'fonts')));
app.use(express.static(path.join(__dirname, 'styles')));
app.use(express.static(path.join(__dirname, 'scripts')));

server.listen(3000, () => {
  console.log('server running at http://localhost:3000');
});
