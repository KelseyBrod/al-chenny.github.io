function filledOut(event){
    event.preventDefault();
    let content = document.getElementById('inText')

    if (content.value == "") {
        window.alert("Please enter text");
        return;
    }
}

let allParas = [];

function addPara(event){
    let paragraph = document.getElementById('inText').value;
    let node = document.createTextNode(" " + paragraph)
    let existing = document.getElementById('rand');

    existing.appendChild(node);

}


function randoColor() {
    let div = document.getElementById("rand"); //https://css-tricks.com/snippets/javascript/random-hex-color/
    let colorH = document.getElementById("colorH");
    const randomColor = Math.floor(Math.random()*16777215).toString(16);
    const randomColored = Math.floor(Math.random()*16777215).toString(16);
    div.style.color = "#" + randomColor;
    colorH.style.color = "#" + randomColored;
}

function randoSize() {
    let div = document.getElementById("rand");
    let colorH = document.getElementById("colorH");
    const randomSize = Math.floor(Math.random()*100);
    const randomSized = Math.floor(Math.random()*100);
    console.log(randomSize)
    div.style.fontSize =  randomSize + "px";
    colorH.style.fontSize =  randomSized + "px";
}

document.getElementById("theForm").addEventListener('submit', filledOut);
document.getElementById("theForm").addEventListener('submit', addPara);
document.getElementById("theForm").addEventListener('submit', randoColor);
document.getElementById("theForm").addEventListener('submit', randoSize);

