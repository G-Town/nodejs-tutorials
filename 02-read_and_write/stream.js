const fs = require('fs');

const rs = fs.createReadStream('./files/lorem.txt', {encoding: 'utf8'});

const ws = fs.createWriteStream('./files/lorem.txt');

// rs.on('data', (dataChunk) => {
//   ws.write(dataChunk);
// });

// or
rs.pipe(ws);