console.log("Exercise 3")

const main = document.querySelector("#display-box")

const button = document.querySelector("button")

button.addEventListener("click", () => {
    fetch("https://api.adviceslip.com/advice")
        .then(resp => resp.json())
        .then(data => {
            console.log(data)
            main.innerText = data.slip.advice
        })
        .catch(e => console.log(e))
})
