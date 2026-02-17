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

const getUniqueItems = (array) => {
    return [...new Set(array)];
};



const matchRegex = (text, pattern, flags) => {
    if (pattern === "\d+") pattern = "\\d+";
    const regex = new RegExp(pattern, flags);
    const resultArray = getUniqueItems(text.match(regex));
    if (resultArray.length === 0) return "no match";
    if (flags.includes("g")) {
        for (let item of resultArray) {
           text = text.replaceAll(item, `<span class="highlight">${item}</span>`);
        }
        console.log(text);
        return text
    } 
    console.log(text.replace(resultArray[0], `<span class="highlight">${resultArray[0]}</span>`) );
    return text.replace(resultArray[0], `<span class="highlight">${resultArray[0]}</span>`);
};

// console.log(matchRegex("Gu1n34 P1g5", "\d+", "gi"))

// console.log(matchRegex("I am awake 798 hasemiCha", "\d+", "gi"));

regexPattern.addEventListener("input", ()=> {
    return regexPattern.value;
});

testButton.addEventListener("click", ()=> {
    const regex = regexPattern.value;
    const testString = stringToTest.textContent;
    testResult.innerHTML =  matchRegex(testString, regex, getFlags());
});



