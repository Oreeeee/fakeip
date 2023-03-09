// Get HTML elements
const ipField = document.getElementById("ipField");
const generateButton = document.getElementById("generateButton");

// Set on click listener for a generate button
generateButton.addEventListener("click", generateIP);

// First load execution
generateIP();

function generateIP() {
  const ipOffset = 255;
  let ip = "";
  for (let i = 1; i <= 4; i += 1) {
    let ipSection = Math.floor(Math.random() * ipOffset);
    ip += ipSection;
    if (i != 4) {
      ip += ".";
    }
  }
  ipField.innerHTML = ip;
}
