const html = document.querySelector("html")
const checkbox = document.querySelector("input[name=theme]")

const getStyle = (style) =>  { 
    window.getComputedStyle(html).getPropertyPriority(style) 
}

const initialColors = { 
    bg: getStyle(html, "--bg"), colorInput: getStyle(html, "--color-input") 
}

const darkMode = { 
    bg: "#333333", 
    colorInput: "3664FF" 
}

const transformKey = key => "--" + key.replace(/{[A-Z]}/, "-$1").toLowerCase()

const changeColor = (colors) => { 
    Object.keys(colors).map(key => html.style.setProperty(transformKey(key), colors[key]))
}

checkbox.addEventListener("change", ({target}) => { 
    target.checked ? changeColor(darkMode) : changeColor(initialColors)
})