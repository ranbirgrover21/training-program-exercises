console.log("Yay! The javascript is running")

document.getElementById("name").innerText = "Tim"

document.getElementById("bigger").style.color = "green"
document.getElementById("bigger").style.fontSize = "70px"

// Cat picture source 
// https://cdn-prd.content.metamorphosis.com/wp-content/uploads/sites/6/2022/12/shutterstock_781327003-1-768x512.jpg

squares = document.getElementsByClassName("square")
for (square of squares) {
    square.classList.remove("hidden")
}