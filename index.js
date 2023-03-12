// Get HTML elements
const ipField = document.getElementById("ipField");
const generateButton = document.getElementById("generateButton");
const fIPCount = document.getElementById("fIPCount");

generateButton.addEventListener("click", generateIP); // Set on click listener for a generate button

generateIP(); // First load execution

function generateIP() {
  const ipOffset = 255;
  const generateCount = fIPCount.value;
  let ips = "";
  for (let i = 1; i <= generateCount; i += 1) {
    // Generate multiple IPs
    for (let j = 1; j <= 4; j += 1) {
      // Generate one IP
      let ipSection = Math.floor(Math.random() * ipOffset); // Generate one section of one IP
      ips += ipSection;
      if (j != 4) {
        // Add a . if the IP number isn't the last one
        ips += ".";
      }
    }
    ips += "<br>";
  }
  ipField.innerHTML = ips;
}
