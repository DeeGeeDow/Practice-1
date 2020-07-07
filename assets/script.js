var dark = false;
var button = document.getElementById('button');

function darkMode(){
    document.body.style.background = "black";
    button.style.backgroundColor   = "white";
    button.style.color             = "black";
    button.innerHTML               = "Dark Mode!";
    button.className               = "toLight";
    dark                           = true;
}

function lightMode(){
    document.body.style.background = "white";
    button.style.backgroundColor   = "black";
    button.style.color             = "white";
    button.innerHTML               = "Light Mode!";
    button.className               = "toDark";
    dark                           = false;
}

function changeMode(){
    if(dark){
        lightMode();
    }else{
        darkMode();
    }
}
lightMode();