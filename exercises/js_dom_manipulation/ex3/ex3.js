// https://github.com/public-apis/public-apis? 
// Alternative APIs

console.log("Exercise 3")

const main = document.querySelector("#display-box")

const button = document.querySelector("button")

button.addEventListener("click", () => {
    fetch("https://api.adviceslip.com/advice")
        .then(response => response.json()).then((response) => {
            main.innerText = response.slip.advice;
        })
})
