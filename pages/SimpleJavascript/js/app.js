function filledOut(event){
    event.preventDefault();
    let content = document.getElementById('inText')

    if (content.value == "") {
        window.alert("Please enter text");
        return;
    } else {
        window.alert("Submitted!")
    }
}

let allParas = [];

function addPara(event){
    let paragraph = document.getElementById('inText').value
    
    allParas.push(paragraph);
    document.querySelector('form').reset();

    let p = document.querySelector('p');
    p.textContent = '\n' + paragraph;

}

document.getElementById("theForm").addEventListener('submit', filledOut);
document.getElementById("theForm").addEventListener('submit', addPara);

