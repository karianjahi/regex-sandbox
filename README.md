# 🧪 Regex Sandbox
[![Live Demo](https://img.shields.io/badge/Live-Demo-brightgreen?style=for-the-badge)](https://karianjahi.github.io/regex-sandbox/)


![MIT License](https://img.shields.io/badge/License-MIT-yellow.svg)
![HTML](https://img.shields.io/badge/HTML-Structure-orange)
![CSS](https://img.shields.io/badge/CSS-Styling-blue)
![JavaScript](https://img.shields.io/badge/JavaScript-Logic-yellow)
![Status](https://img.shields.io/badge/Status-Active-success)

An interactive **Regular Expression testing playground** built with Vanilla JavaScript, HTML, and CSS.



---

## 🚀 Overview

Regex Sandbox allows users to:

- Enter custom regular expression patterns
- Select regex flags (`i`, `g`)
- Test against editable text
- Visually highlight matches
- Dynamically render results inside the browser

The project demonstrates DOM manipulation, dynamic RegExp construction, and safe content rendering.

---

## ✨ Features

- 🔎 Dynamic RegExp creation
- 🎯 Visual highlighting of matches
- 🔁 Global flag (`g`) support
- 🔤 Case-insensitive flag (`i`) support
- 🖊 Editable test string (`contenteditable`)
- 🎨 Clean dark-themed UI with CSS variables
- ⚡ Zero dependencies (Pure Vanilla JS)

---

## 🧠 How It Works

1. User inputs a pattern.
2. Selected flags are combined dynamically.
3. A RegExp object is created at runtime.
4. Matching substrings are wrapped in a styled span element.
5. The result is rendered inside the result container.

The browser automatically replaces one or all matches depending on the selected flags.

---

## 📂 Project Structure

regex-sandbox/
├── index.html     # Application structure  
├── script.js      # Regex logic & DOM events  
├── styles.css     # UI styling & highlight styles  
├── LICENSE  
└── README.md  

---

## 🛠 Technologies Used

- HTML5
- CSS3 (Flexbox + Custom Properties)
- JavaScript (ES6)
- DOM API
- RegExp API

---

## 🎓 Concepts Demonstrated

- Dynamic RegExp creation
- Flag management logic
- DOM selection & event handling
- Template literal rendering
- innerHTML vs textContent usage
- Functional separation of concerns

---

## 🔮 Possible Improvements

- Add error handling for invalid regex patterns
- Display match count
- Support additional flags (`m`, `s`, `u`, `y`)
- Real-time matching without button click
- Copy result to clipboard
- Add dark/light theme toggle

---

## 📜 License

MIT License

---

Built with ❤️ using Vanilla JavaScript.
