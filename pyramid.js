var currentSymbol = "#"
var currentHeight = 1
var pyramidNode = document.getElementById("pyramid")

function buildPyramid() {
    pyramidNode.innerHTML = ''
    for (var i = 1; i <= currentHeight; i++) {
        let row = document.createTextNode('\u00A0'.repeat(currentHeight - i) + currentSymbol.repeat(i + 1))
        let paragraph = document.createElement("p")
        paragraph.appendChild(row)
        pyramidNode.appendChild(paragraph)
    }
}

function selectSymbol() {
    currentSymbol = selectSymbolNode.value
    console.log(currentSymbol)
    buildPyramid()
}

function selectHeight() {
    currentHeight = selectHeightNode.value
    console.log(currentHeight)
    buildPyramid()
}

let selectSymbolNode = document.getElementById("symbol")
console.log(selectSymbolNode)

let selectHeightNode = document.getElementById("height")


selectSymbolNode.addEventListener("change", selectSymbol)
selectHeightNode.addEventListener("change", selectHeight)


buildPyramid()
