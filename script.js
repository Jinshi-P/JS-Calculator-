
let screen =document.getElementById("display");


function buttonclick(val){
    screen.value= screen.value+val;
    // To make negative value
    if(val=='+-'){
        screen.value = parseFloat(screen.value)* -1
     }
    // To avoid repetation
     if(lastcharacter=='+' && '/' && '*' && '-' && '.'){

        screen.value=screen.value.slice(0,-1) 
     }     
}

function allclear(){
    screen.value= ""
}

function backspace(){
    screen.value=screen.value.slice(0,-1)
}

function equalbutton(){
    screen.value = eval(screen.value);
}

function percentage(){
    screen.value= eval(screen.value) *100 +"%"
}