function encodeASCII(){
    var input = document.getElementById("textASCII").value;
    var key_input = document.getElementById("logicInput").value;
    var num = Math.ceil(input.length/key_input.length + 1);
    
    var key = new Array(num).join(key_input);
    var siff_opt = document.getElementById("optASCIIsiff").getElementsByTagName("LABEL");
    var logic_opt = document.getElementById("optASCIIlogic").getElementsByTagName("LABEL");
    var outputArr = [];
    
    var logic = 0;
    for (var j = 0; j < logic_opt.length; j++){
        if(logic_opt[j].children[0].checked){
            logic = j;
        }
     }
     
    for(var i = 0; i < input.length; i++){
        var letter = input.charCodeAt(i);
        var key_letter = key.charCodeAt(i);
        
        for (var k = 0; k < siff_opt.length; k++){
            if(siff_opt[k].children[0].checked){
                if(k === 1){
                    letter = "0" + letter.toString(2);
                    key_letter = "0" + key_letter.toString(2);
                    var new_letter = "";
                    switch (logic) {
                        case 0:
                            new_letter = letter;
                            break;
                        case 1:
                            for(var d = 0; d < letter.length; d++){
                                if(letter[d] === key_letter[d]){
                                    new_letter += "1";
                                }else if (letter[d] !== key_letter[d]){
                                    new_letter += "0";
                                }
                            }
                            break;
                        case 2:
                            for(var d = 0; d < letter.length; d++){
                                if(letter[d] === "1" && key_letter[d] === "0"){
                                    new_letter += "1";
                                }else if (letter[d] === "0" && key_letter[d] === "1"){
                                    new_letter += "1";
                                }else{
                                    new_letter += "0";
                                }
                            }
                            break;
                        case 3:
                            for(var d = 0; d < letter.length; d++){
                                if(letter[d] === "1"){
                                    new_letter += "0";
                                }else if(letter[d] === "0"){
                                    new_letter += "1";
                                }
                            }
                            break;
                    }
                }else if(k== 2){
                    new_letter = letter.toString(16);
                }
                else{
                   new_letter = letter; 
                }
            }
        } 
        outputArr.push(new_letter);
    }
    
    
     
    var final = outputArr.join(" ");
    document.getElementById("resultASCII").innerHTML = final;
}

function decodeASCII(){
    var input = document.getElementById("textASCII").value;
    var inputArr = input.split(" ");
    var key_input = document.getElementById("logicInput").value;
    var num = Math.ceil(input.length/key_input.length + 1);
    
    var key = new Array(num).join(key_input);
    var keyArr = key.split(" ");
    var siff_opt = document.getElementById("optASCIIsiff").getElementsByTagName("LABEL");
    var logic_opt = document.getElementById("optASCIIlogic").getElementsByTagName("LABEL");
    var outputArr = [];
    
    var logic = 0;
    for (var j = 0; j < logic_opt.length; j++){
        if(logic_opt[j].children[0].checked){
            logic = j;
        }
     }
     
    for(var i = 0; i < inputArr.length; i++){
        var letter = inputArr[i];
        var key_letter = key.charCodeAt(i);
        
        for (var k = 0; k < siff_opt.length; k++){
            if(siff_opt[k].children[0].checked){
                if(k === 1){
                    key_letter = "0" + key_letter.toString(2);
                    var new_letter = "";
                    switch (logic) {
                        case 0:
                            new_letter = letter;
                            break;
                        case 1:
                            for(var d = 0; d < letter.length; d++){
                                if(letter[d] === "1" && key_letter[d] === "1"){
                                    new_letter += "1";
                                }else if (letter[d] === "1" && key_letter[d] === "0"){
                                    new_letter += "0";
                                }else if (letter[d] === "0" && key_letter[d] === "0"){
                                    new_letter += "1";
                                }else if (letter[d] === "0" && key_letter[d] === "1"){
                                    new_letter += "0";
                                }
                            }
                            break;
                        case 2:
                            for(var d = 0; d < letter.length; d++){
                                if(letter[d] === "1" && key_letter[d] === "0"){
                                    new_letter += "1";
                                }else if (letter[d] === "0" && key_letter[d] === "1"){
                                    new_letter += "1";
                                }else if (letter[d] === key_letter[d]){
                                    new_letter += "0";
                                }
                            }
                            break;
                        case 3:
                            for(var d = 0; d < letter.length; d++){
                                if(letter[d] === "1"){
                                    new_letter += "0";
                                }else if(letter[d] === "0"){
                                    new_letter += "1";
                                }
                            }
                            break;
                    }
                    new_letter = parseInt(new_letter, 2);
                }else if(k == 2){
                    var new_letter = parseInt(letter, 16); 
                }
                else{
                   var new_letter = parseInt(letter); 
                }
            }
        } 
        outputArr.push(String.fromCharCode(new_letter));
    }
    
    
     
    var final = outputArr.join("");
    document.getElementById("resultASCII").innerHTML = final;
}

function asciiControl(choice){
    if(choice === "dec"){
        document.getElementById("asciiLogicBox").style = "display: none;";
    }else if(choice === "bin"){
        document.getElementById("asciiLogicBox").style = "display: block;";
    }
}
