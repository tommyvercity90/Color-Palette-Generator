🎨 Color Palette Generator

A simple and interactive Color Palette Generator built with HTML5, CSS3, and JavaScript.

The tool generates a random palette containing five hexadecimal colors. Click any color swatch to copy its HEX code directly to your clipboard.

🚀 Features

🎨 Generate a random color palette

🌈 Displays 5 color swatches at a time

📋 Click a swatch to copy its HEX color code

✅ Shows a confirmation message after copying

🔄 Generate a new palette with one click

📱 Responsive design for desktop, tablet, and mobile

⚡ Built using vanilla HTML, CSS, and JavaScript

📁 Project Structure
color-palette-generator/
│
├── index.html
├── style.css
├── script.js
└── README.md

🛠️ Technologies Used

HTML5 — Creates the structure of the application

CSS3 — Handles styling, layout, animations, and responsiveness

JavaScript — Generates random colors and handles user interactions

Clipboard API — Copies HEX color codes to the clipboard

🧠 How It Works
1. Generate Random Colors

JavaScript uses Math.random() to generate random values between 0 and 15.

These values are used to select characters from:

"0123456789ABCDEF"


Six randomly selected characters are combined with # to create a HEX color such as:

#3A7BD5

2. Create Color Swatches

Five random colors are generated and displayed dynamically on the page using JavaScript DOM manipulation.

Each swatch contains:

The generated color as its background

Its HEX code

A click event for copying the color

3. Copy a Color

When a swatch is clicked, the Clipboard API copies its HEX value:

navigator.clipboard.writeText(color);


A short confirmation message is then displayed:

#3A7BD5 copied to clipboard!

▶️ How to Run
Option 1 — Open Directly

Download or clone the project.

Open the project folder.

Double-click index.html.

Option 2 — VS Code Live Server

For the best experience:

Open the project in Visual Studio Code.

Install the Live Server extension.

Right-click index.html.

Select Open with Live Server.

📋 Usage

Open the application.

A random five-color palette will be generated automatically.

Click Generate New Palette to create another palette.

Click any color swatch to copy its HEX code.

Use the copied HEX value in your own designs or projects.

📸 Example

A generated palette might look like:

┌──────────┬──────────┬──────────┬──────────┬──────────┐
│  #FF5733 │  #33FF57 │  #3357FF │  #F3FF33 │  #A833FF │
│          │          │          │          │          │
└──────────┴──────────┴──────────┴──────────┴──────────┘

             [ Generate New Palette ]


The colors are randomly generated, so every new palette will be different.

🎯 Learning Objectives

This project is designed to practice:

Random value generation with Math.random()

Working with hexadecimal color values

JavaScript DOM manipulation

Event listeners

The Clipboard API

Dynamic HTML element creation

CSS Grid

Responsive web design

🔮 Future Improvements

Possible features that could be added later:

Lock individual colors

Generate palettes with 6 or more colors

Save favorite palettes

Export palettes as CSS variables

Copy the entire palette at once

Add HSL/RGB color formats

Add dark/light themes

Add color accessibility/contrast information

📚 References

MDN — Math.random()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random

MDN — Clipboard API
https://developer.mozilla.org/en-US/docs/Web/API/Clipboard_API

