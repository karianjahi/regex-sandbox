# 🧪 Regex Sandbox

![MIT License](https://img.shields.io/badge/License-MIT-yellow.svg)
![HTML](https://img.shields.io/badge/HTML-24%25-orange)
![CSS](https://img.shields.io/badge/CSS-48%25-blue)
![JavaScript](https://img.shields.io/badge/JavaScript-27%25-yellow)
![Status](https://img.shields.io/badge/Status-Active-success)

An interactive **Regular Expression testing playground** built with
vanilla JavaScript, HTML, and CSS.

Test patterns in real time, apply flags, and visually highlight matches
directly in the browser.

------------------------------------------------------------------------

## 🚀 Features

-   🔎 Live regex pattern testing
-   🎯 Visual highlighting of matches
-   🔁 Global (`g`) flag support
-   🔤 Case-insensitive (`i`) flag support
-   ✨ Unique match filtering (no duplicate highlights)
-   🧼 Clean and minimal UI
-   ⚡ Zero dependencies (pure vanilla JS)

------------------------------------------------------------------------

## 🖥️ Demo Preview

Regex pattern input with selectable flags:

    /your-pattern/gi

Editable test string area and highlighted results displayed instantly.

------------------------------------------------------------------------

## 📂 Project Structure

    regex-sandbox/
    │
    ├── index.html     # Application structure
    ├── styles.css     # UI styling & highlight styles
    ├── script.js      # Regex engine logic
    ├── LICENSE
    └── README.md

------------------------------------------------------------------------

## 🧠 How It Works

### 1️⃣ Pattern Input

Users enter a regex pattern between forward slashes.

### 2️⃣ Flag Selection

Available flags:

  Flag   Description
  ------ -------------------------------
  `i`    Case-insensitive matching
  `g`    Global matching (all matches)

### 3️⃣ Matching Logic

-   A dynamic `RegExp` object is created using the provided pattern and
    flags.
-   Matches are extracted from the test string.
-   Duplicate matches are removed.
-   Matches are wrapped in a `<span>` with a highlight class.
-   If no match is found → displays `"no match"`.

------------------------------------------------------------------------

## 🎨 UI Highlights

-   Dark themed interface
-   Responsive layout
-   Editable content area (`contenteditable`)
-   Light green highlight styling for matches

------------------------------------------------------------------------

## 📦 Installation

Clone the repository:

``` bash
git clone https://github.com/your-username/regex-sandbox.git
cd regex-sandbox
```

Open `index.html` in your browser.

No build step required.

------------------------------------------------------------------------

## 🛠️ Technologies Used

-   HTML5
-   CSS3 (Flexbox + Custom Properties)
-   JavaScript (ES6)

------------------------------------------------------------------------

## 🔮 Possible Improvements

-   Add more regex flags (`m`, `s`, `u`, `y`)
-   Add live auto-testing without button click
-   Add error handling for invalid patterns
-   Display match count
-   Add dark/light theme toggle
-   Add copy-to-clipboard feature

------------------------------------------------------------------------

## 📜 License

This project is licensed under the MIT License.

------------------------------------------------------------------------

## 🤝 Contributing

Contributions are welcome!

1.  Fork the project
2.  Create your feature branch
3.  Commit your changes
4.  Push to the branch
5.  Open a Pull Request

------------------------------------------------------------------------

## ⭐ If You Like This Project

Give it a star on GitHub and share it with others!

------------------------------------------------------------------------

Built with ❤️ using Vanilla JavaScript.
