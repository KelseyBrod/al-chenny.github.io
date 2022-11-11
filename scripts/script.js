
function transparency(id){
    let image = document.getElementById(id);
    if (image.style.opacity == 0) {
        image.style.opacity = '0.6';
    } else{
        image.style.opacity = '0';
    }

}

document.getElementById("button1").addEventListener('click', transparency);