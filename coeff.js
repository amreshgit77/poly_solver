function computeConstantFromRoots(testcase) {
  const { n, k } = testcase.keys;

  // Get first k roots
  const roots = [];
  for (let i = 1; i <= n; i++) {
    if (testcase[i]) {
      const base = parseInt(testcase[i].base, 10);
      const val = parseInt(testcase[i].value, base);
      roots.push(val);
    }
    if (roots.length === k) break;
  }

  // Polynomial constant term is (-1)^k * product(roots)
  const constant = roots.reduce((acc, r) => acc * r, 1);
  return (k % 2 === 0 ? constant : -constant);
}

module.exports = { computeConstantFromRoots };
