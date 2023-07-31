const { format } = require('date-fns');
const { v4: uuid } = require('uuid');

console.log(format(new Date(), 'yyyMMdd\tHH:mmss'))

console.log(uuid())