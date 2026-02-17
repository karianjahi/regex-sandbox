const regexPattern = document.getElementById("pattern");
const stringToTest = document.getElementById("test-string");
const testButton = document.getElementById("test-btn");
const testResult = document.getElementById("result");
const caseInsensitiveFlag = document.getElementById("i");
const globalFlag = document.getElementById("g");

const getFlags = () => {
    if (caseInsensitiveFlag.checked && globalFlag.checked) return "gi";
    if (caseInsensitiveFlag.checked && !globalFlag.checked) return "i";
    if (!caseInsensitiveFlag.checked && !globalFlag.checked) return "";
    if (!caseInsensitiveFlag.checked && globalFlag.checked) return "g";
};

const matchRegex = (text, pattern, flags) => {
    const regex = new RegExp(pattern, flags);
    const resultArray = text.match(regex);
    console.log(resultArray);
    if (resultArray) return resultArray[0];
    return "";
};

// console.log(matchRegex("I am awake", "Am", "i"));

regexPattern.addEventListener("input", ()=> {
    return regexPattern.value;
});
console.log("gi".includes("g"));

testButton.addEventListener("click", ()=> {
    const regex = regexPattern.value;
    const testString = stringToTest.textContent;
    const result = matchRegex(testString, regex, getFlags());
    if (getFlags().includes("g")) {
        testResult.innerHTML = testString.replaceAll(result, `<span class="highlight">${result}</span>`);
    } else {
        testResult.innerHTML = testString.replace(result, `<span class="highlight">${result}</span>`);
    }
});



