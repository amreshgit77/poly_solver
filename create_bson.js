// run: node create_bson.js
const fs = require('fs');
let BSON;
try {
  BSON = require('bson');
} catch (e) {
  console.error('Install bson first: npm install bson');
  process.exit(1);
}

const doc = { point: { x: 4, y: 24 } }; // or { k: 2 }
const buf = BSON.serialize(doc);
fs.writeFileSync('coeff.bson', buf);
console.log('coeff.bson written');
