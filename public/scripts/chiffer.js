function setModal(cipher){
    var modalText = helpTexts[cipher];
    if(modalText == undefined){
        modalText = "Tyvärr finns ingen hjälp text ännu men det är på väg!"
    }
    
    
    var modal = document.getElementById("infoModal").children[0].children[0];
    var header = modal.children[0];
    var body = modal.children[1];
    //body.innerHTML = modalText;
    //header.innerHTML = "Hjälp - " + cipher;
}

function encodeScout (){
var abc_opt = document.getElementById("optScout").getElementsByTagName("LABEL");
var keys = [[["a", "b", "c", "d", "e"],[ "f", "g","h", "i", "j"], ["k", "l", "m", "n", "o"], ["p","r", "s", "t","u"],[ "v","y","å", "ä", "ö"]],
    [["a", "f", "k", "p", "v"],[ "b", "g","l", "r", "y"], ["c", "h", "m", "s", "å"], ["d","i", "n", "t","ä"],[ "e","j","o", "u", "ö"]],
    [["a", "b", "c", "d", "e"],[ "p", "r","s", "t", "f"], ["o", "ä", "ö", "u", "g"], ["n","å", "y", "v","h"],[ "m","l","k", "j", "i"]]];
    var keyArr;
    for (var i = 0; i < abc_opt.length; i++){
        if(abc_opt[i].children[0].checked){
            keyArr = keys[i];
        }
    }   
    var abcArr = ["a", "b", "c", "d", "e", "f", "g","h", "i", "j", "k", "l", "m", "n", "o", "p", "r", "s", "t","u", "v", "å", "ä", "ö"];
    var scoutArr = [["S","C","O","U","T"],["s","c","o","u","t"]];
    var input = document.getElementById("textScout").value;
    input = input.toLowerCase();
    var outputArr = [];
    var output;

for(var i = 0; i < input.length; i++){
    for(var j = 0; j < keyArr.length; j++){
        if(keyArr[j].indexOf(input[i]) !== -1){
           var outX = keyArr[j].indexOf(input[i]);
           var outY = j;
           outputArr.push(scoutArr[0][outX] + scoutArr[1][outY]);
        }
    }   
}

output = outputArr.join("");
document.getElementById("resultScout").innerHTML = output;
}

function decodeScout(){
    var abc_opt = document.getElementById("optScout").getElementsByTagName("LABEL");
    var keys = [[["a", "b", "c", "d", "e"],[ "f", "g","h", "i", "j"], ["k", "l", "m", "n", "o"], ["p","r", "s", "t","u"],[ "v","y","å", "ä", "ö"]],
        [["a", "f", "k", "p", "v"],[ "b", "g","l", "r", "y"], ["c", "h", "m", "s", "å"], ["d","i", "n", "t","ä"],[ "e","j","o", "u", "ö"]],
        [["a", "b", "c", "d", "e"],[ "p", "r","s", "t", "f"], ["o", "ä", "ö", "u", "g"], ["n","å", "y", "v","h"],[ "m","l","k", "j", "i"]]];

    var key;
    for (var i = 0; i < abc_opt.length; i++){
            if(abc_opt[i].children[0].checked){
                key = keys[i];
            }
        }   
    
    var abcArr = ["a", "b", "c", "d", "e", "f", "g","h", "i", "j", "k", "l", "m", "n", "o", "p", "r", "s", "t","u", "v", "å", "ä", "ö"];
    var scoutArr = ["S","C","O","U","T"];
    var input = document.getElementById("textScout").value;
    var inputArr = [];
    var outputArr = [];
    var output;

    for(var i = 0; i < input.length; i++ ){
        inputArr[i] = input.charAt(i);
    }

    for(var i = 0; i < input.length; i++ ){
        if(scoutArr.indexOf(inputArr[i]) > -1){
            x = scoutArr.indexOf(inputArr[i +1].toUpperCase());
            y = scoutArr.indexOf(inputArr[i]);
            char = key[x][y];
            outputArr.push(char);
            i++;
        }else{
            outputArr.push(inputArr[i]);
        }
    }
    
    output = outputArr.join("");
    document.getElementById("resultScout").innerHTML = output;
}





