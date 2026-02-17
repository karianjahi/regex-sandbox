const regexPattern = document.getElementById("pattern");
const stringToTest = document.getElementById("test-string");
const testButton = document.getElementById("test-btn");
const testResult = document.getElementById("result");
const caseInsensitiveFlag = document.getElementById("i");
const globalFlag = document.getElementById("g");


const getFlags = () => {
     if (caseInsensitiveFlag.checked && globalFlag.checked) return "gi";
     if (caseInsensitiveFlag.checked && !globalFlag.checked) return "i";
     if (!caseInsensitiveFlag.checked && globalFlag.checked) return "g";
     if (!caseInsensitiveFlag.checked && !globalFlag.checked) return "";
};


const createValidRegex = (pattern, flag) => {
    return new RegExp(pattern, flag);
};


const replaceMatch = (text, pattern, flag) => {
    return text.replace(createValidRegex(pattern, flag), m => `<span class="highlight">${m}</span>`);
    
};

testButton.addEventListener("click", () => {
    testResult.innerHTML = replaceMatch(stringToTest.textContent, regexPattern.value, getFlags());
});
