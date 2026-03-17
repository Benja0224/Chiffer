import express from 'express';
import { createServer } from 'node:http';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';
import path from 'node:path';

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

const helpTexts = {
    scout:"Hur varianternas nycklar ser ut kan man se i stora chiffernyckeln (pdf) som finns länkad på startsidan.", 
    tvilling:"Om meddelandena är av olika längd så läggs det till mellanslag, det är alltså fördelaktit att hålla längden så nära varandra som möjligt.", 
    back:"Tipps: Punktuation och stora bokstäver i början av ord och meningar gör det lättare att lista ut chiffret.",
    zick:"För att Zic Zac chiffret ska kunna läsas väl bör man välja en monospace font, tex Courier.",
    rune:"Detta chiffer är baserat på en font, man måste därför ta en bild på chiffret och kan inte bara kopiera det. Fonten heter Harald Runic och motsvarar medeltida runor. <a href='https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/Medeltida_runor.svg/1920px-Medeltida_runor.svg.png'> länk </a>'",
    ascii:"Översätter texten till decimal, hexadecimal eller binära ascii koder. Binära koden kan sedan &quot; krypteras &quot; bitvis med hjälp av logiska operatorer. Det vill säga varje bit i texten jämförs med varje bit i lösenordet. Av tekniska skäl används UTF-16, vilket dock är identiskt med ASCII för vanliga bokstäver."
            
};