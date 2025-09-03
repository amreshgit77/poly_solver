const path = require('path');
const { computeConstantFromRoots } = require('./coeff');

const TESTCASE = path.join(__dirname, 'root.json'); // keep testcases in root.json

try {
  const testcase = require(TESTCASE);
  const C = computeConstantFromRoots(testcase);
  console.log("C =", C);
} catch (err) {
  console.error("Error:", err.message);
}
