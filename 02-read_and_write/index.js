const fs = require('fs');

// fs.readFile('./files/starter.txt', 'utf8', (err, data) => {
//   if (err) throw err;
//   console.log(data);
// });

const path = require('path');

// use the path module to avoid errors caused by hard coded pathnames
// fs.readFile(path.join(__dirname, 'files, 'starter.txt'), 'utf8', (err, data) => {
//   if (err) throw err;
//   console.log(data);
// });

// console.log('Hello...');

// nest callback functions to ensure the wanted sequence of asynchronous functions is executed
// fs.writeFile(path.join(__dirname, 'files', 'reply.txt'), 'Nice to meet you.', (err) => {
//   if (err) throw err;
//   console.log('Write complete');

//   fs.appendFile(path.join(__dirname, 'files', 'reply.txt'), '\n\nYes it is.', (err) => {
//     if (err) throw err;
//     console.log('Append complete');

//     fs.renameFile(path.join(__dirname, 'files', 'reply.txt'), 'newReply.', (err) => {
//       if (err) throw err;
//       console.log('Rename complete');
//     });
//   });
// });


// use primises to write async functions while avoiding "callback hell" shown above
const fsPromises = require('fs').promises;

const fileOps = async () => {
  try {
    const data = await fsPromises.readFile(path.join(__dirname, 'files', 'starter.txt'), 'utf8');
    console.log(data);

    // await fsPromises.unlink(path.join(__dirname, 'files', 'starter.txt'));

    await fsPromises.writeFile(path.join(__dirname, 'files', 'promiseWrite.txt'), data);
    await fsPromises.appendFile(path.join(__dirname, 'files', 'promiseWrite.txt'), '\n\nNice to meet you.');
    await fsPromises.rename(path.join(__dirname, 'files', 'promiseWrite.txt'), path.join(__dirname, 'files', 'promiseComplete.txt'));
    const newData = await fsPromises.readFile(path.join(__dirname, 'files', 'promiseComplete.txt'), 'utf8');
    console.log(newData);

  } catch (err) {
    console.log(err);
  }
}

fileOps();

// exit on uncaught errors
process.on('uncaughtError', err => {
  console.error(`There was an uncaught error: ${err}`);
  process.exit(1);
});