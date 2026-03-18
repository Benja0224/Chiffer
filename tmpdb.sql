CREATE TABLE Ciphers(
    cipher_id 'text',
    cipher_name 'text',
    script_file 'text',
    descr 'text',
    PRIMARY KEY(cipher_id)
);


INSERT INTO Ciphers VALUES('scout', 'Scoutchiffer', 'chiffer.js', 'FiHur varianternas nycklar ser ut kan man se i stora chiffernyckeln (pdf) som finns länkad på startsidan.');
INSERT INTO Ciphers VALUES('twin', 'Tvilling', 'twin.js', 'Om meddelandena är av olika längd så läggs det till mellanslag, det är alltså fördelaktit att hålla längden så nära varandra som möjligt.');
INSERT INTO Ciphers VALUES('back', 'Backlänges', 'simple-ciphers.js', 'Tipps: Punktuation och stora bokstäver i början av ord och meningar gör det lättare att lista ut chiffret.');
INSERT INTO Ciphers VALUES('ziza', 'Zig-Zag', 'simple-ciphers.js', 'För att Zic Zac chiffret ska kunna läsas väl bör man välja en monospace font, tex Courier.');
INSERT INTO Ciphers VALUES('rune', 'Runor', 'simple-ciphers.js', 'Detta chiffer är baserat på en font, man måste därför ta en bild på chiffret och kan inte bara kopiera det. Fonten heter Harald Runic och motsvarar medeltida runor. <a href=''https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/Medeltida_runor.svg/1920px-Medeltida_runor.svg.png''> länk </a>''');
INSERT INTO Ciphers VALUES('ascii', 'ASCII', 'ascii.js', 'Översätter texten till decimal, hexadecimal eller binära ascii koder. Binära koden kan sedan &quot; krypteras &quot; bitvis med hjälp av logiska operatorer. Det vill säga varje bit i texten jämförs med varje bit i lösenordet. Av tekniska skäl används UTF-16, vilket dock är identiskt med ASCII för vanliga bokstäver.');
INSERT INTO Ciphers VALUES('morse', 'Morse', 'morse.js', 'saknas');
INSERT INTO Ciphers VALUES('brad', 'Brädgård', 'simple-ciphers.js', 'saknas');
INSERT INTO Ciphers VALUES('shift', 'Förskjutning', 'shift.js', 'saknas');
INSERT INTO Ciphers VALUES('t9', 'T9', 'numbers.js', 'saknas');
INSERT INTO Ciphers VALUES('number', 'Sifferchiffer', 'number.js', 'saknas');
INSERT INTO Ciphers VALUES('vig', 'Vigenere', 'shift.js', 'saknas');
INSERT INTO Ciphers VALUES('letter', 'Bokstavschiffer', 'letter.js', 'saknas');
INSERT INTO Ciphers VALUES('playfair', 'Playfair', 'playfair.js', 'saknas');
