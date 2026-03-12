import Database from 'better-sqlite3';

const helpTexts = {
    scout:"FiHur varianternas nycklar ser ut kan man se i stora chiffernyckeln (pdf) som finns länkad på startsidan.", 
    tvilling:"Om meddelandena är av olika längd så läggs det till mellanslag, det är alltså fördelaktit att hålla längden så nära varandra som möjligt.", 
    back:"Tipps: Punktuation och stora bokstäver i början av ord och meningar gör det lättare att lista ut chiffret.",
    zick:"För att Zic Zac chiffret ska kunna läsas väl bör man välja en monospace font, tex Courier.",
    rune:"Detta chiffer är baserat på en font, man måste därför ta en bild på chiffret och kan inte bara kopiera det. Fonten heter Harald Runic och motsvarar medeltida runor. <a href='https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/Medeltida_runor.svg/1920px-Medeltida_runor.svg.png'> länk </a>'",
    ascii:"Översätter texten till decimal, hexadecimal eller binära ascii koder. Binära koden kan sedan &quot; krypteras &quot; bitvis med hjälp av logiska operatorer. Det vill säga varje bit i texten jämförs med varje bit i lösenordet. Av tekniska skäl används UTF-16, vilket dock är identiskt med ASCII för vanliga bokstäver."
            
};

let inserts = [];
let names = Object.keys(helpTexts);
let helps = Object.entries(helpTexts);

for(let i = 0; i < names.length;i++){
    inserts.push({name:names[i], descr:helps[i][1]});
}

const db = new Database('ciphers.db');
db.pragma('journal_mode = WAL');

const insert = db.prepare('INSERT INTO Ciphers (cipher_name, descr) VALUES (@name, @descr)');

const insertMany = db.transaction((data) => {
  for (const row of data) insert.run(row);
});

console.log(inserts);
insertMany(inserts);