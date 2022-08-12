module.exports = function check(str, bracketsConfig) {
  let brackets = '';
  const bracketsPair = bracketsConfig.map((item) => item[0] + item[1]);

  for (let bracket of str) {
    brackets += bracket;

    bracketsPair.forEach((pair) => {
      if (brackets.endsWith(pair)) {
        brackets = brackets.slice(0, brackets.length - 2);
      }
    });
  }

  return brackets.length === 0;
}
