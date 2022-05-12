
let hidden = document.querySelector('.hiden')
let fon = document.querySelector('.fon')
let int = document.querySelector('.scrt')

function check(){
hidden.style.visibility = 'visible';
fon.style.visibility = 'visible';
}
function check_back(){
    hidden.style.visibility = 'hidden';
    fon.style.visibility = 'hidden';
}

var count = 0;
function decrease(){
    count=count-1;
    int.value = count;
}
function increase(){
    count = count+1;
    int.value = count;
}

function buy(){
 alert("you succesfully add this item into your trash")   
}

