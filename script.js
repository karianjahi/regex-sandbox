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

const getMatches = (text, pattern) => {
    const flag = getFlags();
    // const flag = "gi";
    const regex = createValidRegex(pattern,flag);
    console.log(regex);
    return text.match(regex);
};

const getUniqueArray = (array) => {
    return [...new Set(array)];
};

const makeReplacementOfMatches = (text, pattern) => {
    const uniqueMatches = getUniqueArray(getMatches(text, pattern));
    for (let item of uniqueMatches)
        text = text.replace(item, `<span class="highlight">${item}</span>`)
    return text
};

// console.log(makeReplacementOfMatches("I have no dog in the fight since the DOG I had was stolen in the year 1994. Good thing is that i might still bring a new doG bought in year 2014. The new dog will be mofire though the other Dog was not as it was about 16 years old", "[0-9]+"));

