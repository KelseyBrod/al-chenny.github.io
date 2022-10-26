function filledOut(event){
    event.preventDefault();
    let content = document.getElementsByName('thoughts')

    if (content.value == "") {
        window.alert("Please enter text");
        return;
    }
}

function printText(){
    const allText = [];

    let text = document.getElementById("text");
    let thoughts = text.elements.namedItem("thoughts").value;
    allText.push(thoughts);
}

getElementById("theForm").addEventListener('click', filledOut);