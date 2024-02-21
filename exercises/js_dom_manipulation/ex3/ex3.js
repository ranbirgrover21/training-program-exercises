// https://github.com/public-apis/public-apis? 
// Alternative APIs

console.log("Exercise 3")

const main = document.querySelector("#display-box")

const button = document.querySelector("button")

button.addEventListener("click", () => {
    fetch("://api.adviceslip.com/advice")
        .then(...)
})
