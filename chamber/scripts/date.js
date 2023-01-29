// select the elements to manipulate (output to)
const datefield = document.querySelector(".date");
 // for european/family history format with day first.

// derive the current date using a date object
const now = new Date();
const fulldate = new Intl.DateTimeFormat("en-US", { dateStyle: "full" }).format(
	now
);
// long, medium, short options ... try them

datefield.innerHTML = `<em>${fulldate}</em>`;

const spanElement = document.querySelector("date")
const currentDate = new Date(spanElement.innerHTML)
spanElement.innerHTML = currentDate.toLocaleDateString("en-US")

function toggleMenu() {
    document.getElementById("primaryNav").classList.toggle("open");
    document.getElementById("burgerBtn").classList.toggle("open");
}
const lalagyan = document.getElementById("burgerBtn")
lalagyan.onclick = toggleMenu;

let oLastModif = new Date(document.lastModified);
// Step 4: place the value of the current year variable into the HTML file
document.querySelector("#year").innerText = oLastModif;

const newName = document.querySelector("#name");