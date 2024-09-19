console.log("Yay! The javascript is running")

document.getElementById("name").innerText = "Ranbir Grover";
const text = document.querySelector("#bigger");
text.style.color = "green";
text.style.fontSize = "60px";

document.querySelector(".my-img").src = "https://cdn-prd.content.metamorphosis.com/wp-content/uploads/sites/6/2022/12/shutterstock_781327003-1-768x512.jpg";

const squares = document.querySelectorAll(".square");

for (const square of squares) {
    square.classList.remove("hidden");
}


// Cat picture source 
// https://cdn-prd.content.metamorphosis.com/wp-content/uploads/sites/6/2022/12/shutterstock_781327003-1-768x512.jpg
