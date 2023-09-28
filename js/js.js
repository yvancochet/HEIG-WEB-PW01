function darkMode() {
    var element = document.body
    element.classList.toggle("dark-mode")
}

function numbering(button) {
    var textbox = document.getElementsByName("number-input")[0]
    var buttonContent = button.textContent || button.innerText
    textbox.value += buttonContent
}

function switchFlex(button) {
    const container = document.getElementsByClassName('grid-container')[0];
    if (button.textContent == "grid") {
        container.style.display = 'flex'
        container.style.margin = 'initial'
        button.textContent = "flex"
    }
    else if (button.textContent == "flex") {
        container.style.display = 'grid'
        container.style.margin = '0 auto'
        button.textContent = "grid"
    }
}