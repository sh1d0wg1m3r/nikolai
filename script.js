//add a space at the end so words dont combine
var text = "На Николай портфолиото "
//ne mahai "text,"
var otherText = [text, "На", "Николай", "Портфолиото", ":)"]
//ne pipai
var i = 0
//choose "right" or "left" or "random" or "switchRight" or "switchLeft"
const mode = "switchRight"

//ne pipai
if (mode == "switchLeft") {
    otherText = otherText.reverse()
}
//ne pipai
setInterval(function changeText() {
    if (mode == "left") {
        text = text.split("")
        text.push(text.shift())
        text = text.join("")

        document.title = text
    } else if (mode == "right") {
        text = text.split("")
        text.unshift(text.pop())
        text = text.join("")

        document.title = text
    } else if (mode == "random") {
        document.title = otherText[Math.floor(Math.random() * otherText.length)]
    } else if (mode == "switchRight" || mode == "switchLeft") {
        document.title = otherText[i % otherText.length]
        i++
    }
}, 700)
//}, timeinmilisecnds)

const colorButton = document.getElementById("color-button");
const allButtonsAndLinks = document.querySelectorAll("button, a");

colorButton.addEventListener("click", () => {
    document.body.classList.toggle("light");
    allButtonsAndLinks.forEach((element) => {
        if (document.body.classList.contains("light")) {
            element.style.backgroundColor = "#fff";
            element.style.color = "#333";
        } else {
            element.style.backgroundColor = "#333";
            element.style.color = "#fff";
        }
    });
});




