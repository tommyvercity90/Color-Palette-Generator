const palette = document.getElementById("palette");
const generateBtn = document.getElementById("generateBtn");
const message = document.getElementById("message");


// Generate a random hex color
function generateRandomColor() {
    const characters = "0123456789ABCDEF";
    let color = "#";

    for (let i = 0; i < 6; i++) {
        const randomIndex = Math.floor(Math.random() * 16);
        color += characters[randomIndex];
    }

    return color;
}


// Create one color swatch
function createSwatch(color) {
    const swatch = document.createElement("div");
    swatch.classList.add("swatch");

    swatch.style.backgroundColor = color;

    const colorCode = document.createElement("div");
    colorCode.classList.add("color-code");
    colorCode.textContent = color;

    swatch.appendChild(colorCode);

    // Copy color to clipboard when clicked
    swatch.addEventListener("click", async () => {
        try {
            await navigator.clipboard.writeText(color);

            message.textContent = `${color} copied to clipboard!`;

            setTimeout(() => {
                message.textContent = "";
            }, 1500);

        } catch (error) {
            message.textContent = "Failed to copy color.";
            console.error(error);
        }
    });

    return swatch;
}


// Generate a palette of 5 colors
function generatePalette() {
    palette.innerHTML = "";

    for (let i = 0; i < 5; i++) {
        const color = generateRandomColor();
        const swatch = createSwatch(color);

        palette.appendChild(swatch);
    }
}


// Generate palette when button is clicked
generateBtn.addEventListener("click", generatePalette);


// Generate initial palette when page loads
generatePalette();
