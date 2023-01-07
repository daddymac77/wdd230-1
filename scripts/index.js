
let oLastModif = new Date(document.lastModified);
// Step 4: place the value of the current year variable into the HTML file
document.querySelector("#year").innerText = oLastModif;

const newName = document.querySelector("#name");
