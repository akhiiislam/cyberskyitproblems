function groupAnagrams(strs) {
  const anagramMap = new Map();
  for (const str of strs) {
    const cleanedStr = str.replace(/\s+/g, "").toLowerCase();
    const sortedStr = cleanedStr.split("").sort().join("");

    if (!anagramMap.has(sortedStr)) {
      anagramMap.set(sortedStr, []);
    }
    anagramMap.get(sortedStr).push(str);
  }
  return Array.from(anagramMap.values());
}

// Test cases
const testCases = [
  ["eat", "tea", "tan", "ate", "nat", "bat"],
  [""],
  ["a"],
  ["cab", "tin", "pew", "duh", "may", "ill", "buy", "bar", "max", "doc"],
];

testCases.forEach((testCase, index) => {
  console.log(`Test Case ${index + 1}:`);
  console.log("Input:", testCase);
  console.log("Output:", groupAnagrams(testCase));
  console.log("---");
});
