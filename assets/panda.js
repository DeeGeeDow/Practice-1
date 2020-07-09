var key       = document.getElementById('key').value;
var plaintext = document.getElementById('plaintext').value;

var i;
var cipher;

function writeCode(x){
    cipher += String.fromCharCode(x);
}

function translate(){
    var key       = document.getElementById('key').value;
    var plaintext = document.getElementById('plaintext').value;
    var int_key = parseInt(key);
    var plain   = plaintext.toUpperCase();
    var length  = plain.length;
    cipher = "";
    if(key<0)
        cipher = "Key tidak valid";
    else{
    for(i=0; i<length; i++){
        var plainCode = plain.charCodeAt(i);
        var cipherCode = plain.charCodeAt(i)+int_key;
        if(plainCode > 64 && plainCode < 91 && cipherCode < 91){
            writeCode(cipherCode);
        } else if(cipherCode > 90 && plainCode < 91){
            while(cipherCode > 90){
                cipherCode -= 26;
            }
            writeCode(cipherCode);
        } else
            writeCode(plainCode);
        
    }}
}

function panda(){
    translate();
    document.getElementById('cipher').innerHTML = cipher;
}

function reverseTranslate(){
    var key       = document.getElementById('key').value;
    var plaintext = document.getElementById('plaintext').value;
    var int_key = parseInt(key);
    var plain   = plaintext.toUpperCase();
    var length  = plain.length;
    cipher = "";
    if(key<0)
        cipher = "Key tidak valid";
    else{
    for(i=0; i<length; i++){
        var plainCode = plain.charCodeAt(i);
        var cipherCode = plain.charCodeAt(i)-int_key;
        if(plainCode > 64 && plainCode < 91 && cipherCode > 64){
            writeCode(cipherCode);
        } else if(cipherCode < 65 && plainCode >64){
            while(cipherCode < 65){
                cipherCode += 26;
            }
            writeCode(cipherCode);
        } else
            writeCode(plainCode);
        
    }}
}

function reversePanda(){
    reverseTranslate();
    document.getElementById('cipher').innerHTML = cipher;
}