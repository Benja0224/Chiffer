function back(){
    var str = document.getElementById("textBack").value;
    var strArr = str.split("");
    var cipherText = strArr.reverse();
    var out = cipherText.join("");
    document.getElementById("resultBack").innerHTML = out;
}

function encodeZigZag(){
    var str = document.getElementById("textZigZag").value;
    var line1Arr = [];
    var line2Arr = [];
    var strArr = str.split("");
    for (i = 0; i < strArr.length; i+=2) {
        line1Arr.push(strArr[i]);
        line2Arr.push(strArr[i+1]);
    }
    
    var line1 = line1Arr.join("");
    var line2 = line2Arr.join("");
    var out = "<span style='white-space: nowrap'>" + line1 + "</span> <br> <span style='white-space: nowrap'>" + line2 + "</span>";
    document.getElementById("resultZigZag").innerHTML = out;
}

function encodeMorse(){
    var key = ['kl', 'lkkk', 'lklk', 'lkk', 'k', 'kklk', 'llk', 'kkkk', 'kk', 'klll', 'lkl', 'klkk', 'll', 'lk', 'lll', 'kllk', 'llkl', 'klk', 'kkk', 'l', 'kkl', 'kkkl', 'kll', 'lkkl', 'lkll', 'llkk', 'kllkl', 'klkl', 'lllk' , 'lllll', 'kllll', 'kklll', 'kkkll', 'kkkkl', 'kkkkk', 'lkkkk', 'llkkk', 'lllkk', 'llllk', 'klklkl', 'kkllkk'];
    var abc = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z','å','ä','ö', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '.', '?'];
    var input = document.getElementById("textMorse").value;
    input = input.toLowerCase();
    input = input.replaceAll(" ", "_");
    var outputArr = [];
    
    for(var i = 0; i < input.length; i++){
        if(abc.indexOf(input[i])!== -1){
            var code = key[abc.indexOf(input[i])];
            outputArr.push(code);
        } else{
            outputArr.push(input[i]);
        }
    }
    
    var final = outputArr.join(",");
    
    var disp_opt = document.getElementById("optMorse").getElementsByTagName("LABEL");
    for (var i = 0; i < disp_opt.length; i++){
        if(disp_opt[i].children[0].checked){
            opt = i;
        }
    }
    
    if(opt === 0 ){
        final = final.replaceAll("k", ".");
        final = final.replaceAll("l", "-");
        final = final.replaceAll("_", "/");
    }else if(opt === 1){
        final = final.replaceAll("l", "&mdash;");
        final = final.replaceAll("k", "&bull;");
        final = final.replaceAll("_", "|");
        final = final.replaceAll(",", "\xa0\xa0\xa0");
    }
    
    document.getElementById("resultMorse").innerHTML = final;
}

function setModal(cipher){
    var modalText = helpTexts[cipher];
    if(modalText == undefined){
        modalText = "Tyvärr finns ingen hjälp text ännu men det är på väg!"
    }
    
    
    var modal = document.getElementById("infoModal").children[0].children[0];
    var header = modal.children[0];
    var body = modal.children[1];
    body.innerHTML = modalText;
    header.innerHTML = "Hjälp - " + cipher;
}

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

function encodeVig(){
    //get key and the text to be encoded and change chars to lower case and remove unwanted chars (keep only a-z)
    key = document.getElementById("key").value;
    var abc_opt = document.getElementById("optVig").getElementsByTagName("LABEL");
    str = document.getElementById("text").value;
    key = key.toLowerCase();
    str = str.toLowerCase();
    // str = str.replace(/[^a-z]/gi, "");
    
    //setting up arrays
    keyArr = [];
    strArr = [];
    codeArr = [];
    var abc = [['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z','å','ä','ö'],
        ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','x','y','z','å','ä','ö'],
        ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']];
    
    for (var i = 0; i < abc_opt.length; i++){
        if(abc_opt[i].children[0].checked){
            abcArr = abc[i];
        }
    }      
    abcArr = abcArr.concat(abcArr);
    
    for(var i = 0;i<key.length;i++){
        keyArr[i] = key.charAt(i);
        keyArr[i] = abcArr.indexOf(keyArr[i]);
    }
    
    for(var i = 0;i<str.length;i++){
        strArr[i] = str.charAt(i);
        if(/[a-ö]/.test(strArr[i])){
            strArr[i] = abcArr.indexOf(strArr[i]);
        }
    }
    while(keyArr.length <= strArr.length){
        keyArr = keyArr.concat(keyArr);
    }
    
    for(var i = 0;i<strArr.length;i++){
        if(/\d/.test(strArr[i])){
            codeArr[i] = parseInt(strArr[i])+parseInt(keyArr[i]);
            codeArr[i] = abcArr[codeArr[i]];
        }else{
            codeArr.splice(i, 0, "0");
            codeArr[i] = strArr[i];
        }
    }
    
    var finalMessage = codeArr.join("");
    
    document.getElementById("result").innerHTML = finalMessage;
}

function decodeVig(){
    //get key and the text to be encoded and change chars to lower case
    key = document.getElementById("key").value;
    var abc_opt = document.getElementById("optVig").getElementsByTagName("LABEL");
    str = document.getElementById("text").value;
    
    key = key.toLowerCase();
    str = str.toLowerCase();
    //str = str.replace(/ /g, "");
    //str = str.replace(/,/g, "");
    
    //setting up arrays
    keyArr = [];
    strArr = [];
    codeArr = [];
    var abc = [['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z','å','ä','ö'],
        ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','x','y','z','å','ä','ö'],
        ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']];
    for (var i = 0; i < abc_opt.length; i++){
        if(abc_opt[i].children[0].checked){
            abcArr = abc[i];
        }
    }      
    abcArr = abcArr.concat(abcArr);
    
    //spliting the key string into an array and transforming chars to numbers
    for(var i = 0;i<key.length;i++){
        keyArr[i] = key.charAt(i);
        keyArr[i] = abcArr.indexOf(keyArr[i]);
        //console.log(keyArr[i]);
    }
    
    //spliting the message string into an array and transforming chars to numbers
    for(var i = 0;i<str.length;i++){
        strArr[i] = str.charAt(i);
        if(/[a-z]/.test(strArr[i])){
            strArr[i] = abcArr.lastIndexOf(strArr[i]);
            //console.log(strArr[i]);
        }
    }
    
    
    while(keyArr.length <= strArr.length){
    keyArr = keyArr.concat(keyArr);
    }
    
    
    for(var i = 0;i<strArr.length;i++){
        if(/\d/.test(strArr[i])){
            codeArr[i] = parseInt(strArr[i])- parseInt(keyArr[i]);
            codeArr[i] = abcArr[codeArr[i]];
        }else if(/,/.test(strArr[i])){
            strArr[i] = "¤";
        }else{
            codeArr[i] = strArr[i];
        }
        
    }
    
    var finalMessage = codeArr.join("");
    document.getElementById("result").innerHTML = finalMessage;
}

function encodeShift(){
    var shift_num = document.getElementById("shift_input").value;
    console.log(shift_num); 
    shift_num = parseInt(shift_num);
    var abc_opt = document.getElementById("optShift").getElementsByTagName("LABEL");
    var str = document.getElementById("shift_text").value;
    str = str.toLowerCase();
    //setting up arrays
    var abcArr = [];
    var codeArr = [];
    var abc = [['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z','å','ä','ö'],
        ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','x','y','z','å','ä','ö'],
        ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']];
    for (var i = 0; i < abc_opt.length; i++){
        if(abc_opt[i].children[0].checked){
            abcArr = abc[i];
        }
    }
           
    abcArr = abcArr.concat(abcArr);
    console.log(abcArr);
    for(var i = 0; i < str.length; i++){
        console.log(abcArr.indexOf(str[i]));
        if(abcArr.indexOf(str[i]) !== -1){
            var num = abcArr.indexOf(str[i]) + shift_num;
            console.log(shift_num);
            codeArr.push(abcArr[num]);  
        }else{} 
    }
    
    var finalMessage = codeArr.join("");
    console.log(finalMessage);
    document.getElementById("resultShift").innerHTML = finalMessage;
}

function decodeShift(){
    var shift_num = document.getElementById("shift_input").value;
    console.log(shift_num); 
    shift_num = parseInt(shift_num);
    var abc_opt = document.getElementById("optShift").getElementsByTagName("LABEL");
    var str = document.getElementById("shift_text").value;
    str = str.toLowerCase();
    
    //setting up arrays
    var abcArr = [];
    var codeArr = [];
    var abc = [['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z','å','ä','ö'],
        ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','x','y','z','å','ä','ö'],
        ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']];
    for (var i = 0; i < abc_opt.length; i++){
        if(abc_opt[i].children[0].checked){
            abcArr = abc[i];
        }
    }      
    abcArr = abcArr.concat(abcArr);
    
    for(var i = 0; i < str.length; i++){
        if(abcArr.indexOf(str[i]) !== -1){
          var num = abcArr.indexOf(str[i]) - shift_num + (abcArr.length /2);
            codeArr.push(abcArr[num]);  
        }else{} 
    }
    
    var finalMessage = codeArr.join("");
    console.log(finalMessage);
    document.getElementById("resultShift").innerHTML = finalMessage;
    
}

function encodeTwin(){
    var keyArr = [
    [
        ["a","o","u","å","_","a","o","u","å","_"],["0","1","2","3","4","0","1","2","3","4"]
    ],
    [
        ["e","i","y","ä","ö","e","i","y","ä","ö"],["5","6","7","8","9","5","6","7","8","9"]
    ],
    [
        ["b","d","t","k","g","b","d","t","k","g"],["(", ")", '"', "&", "#", "(", ")", '"', "&", "#"]
    ],
    [
        ["m","n","r","l","j","m","n","r","l","j"],["w","q","z","&uuml","!","w","q","z","&uuml","!"]
    ],
    [
        ["c","s","v","f","h","c","s","v","f","h"],["p","x","&eacute",".","?","p","x","&eacute",".","?"]
    ]
];
    var text1 = document.getElementById("textTwin1").value;
    var text2 = document.getElementById("textTwin2").value;
    
    text1 = text1.toLowerCase();
    text2 = text2.toLowerCase();
    text1 = text1.replaceAll(" ", "_");
    text2 = text2.replaceAll(" ", "_");
    text1 = text1.padEnd(text2.length, "_");
    text2 = text2.padEnd(text1.length, "_");
    
    var text1Arr = [];
    var text2Arr = [];
    var key1Arr = [];
    var key2Arr = [];
    var output1Arr = [];
    var output2Arr = [];
   
    
    //str to Arr
    for(var i = 0; i < text1.length; i++ ){
        text1Arr[i] = text1.charAt(i);
    }
    for(var i = 0; i < text1.length; i++ ){
        text2Arr[i] = text2.charAt(i);
    }
    
    //initialize keyArrs search for char in key and set keyArrs to those indexs
    for(var i = 0; i < text1Arr.length;i++){
        for(var j = 0; j < keyArr.length;j++){
            if(keyArr[j][0].indexOf(text1Arr[i])!== -1){
                key1Arr[i] = j;
            }else if(keyArr[j][1].indexOf(text1Arr[i])!== -1){
                key1Arr[i] = j;
            }
        }
    }
    for(var i = 0; i < text2Arr.length;i++){
        for(var j = 0; j < keyArr.length;j++){
            if(keyArr[j][0].indexOf(text2Arr[i])!== -1){
                key2Arr[i] = j;
            }else if(keyArr[j][1].indexOf(text2Arr[i])!== -1){
                key2Arr[i] = j;
            }
        }
    }
    
    key1Arr = key1Arr.concat(key1Arr);
    key2Arr = key2Arr.concat(key2Arr);
   
    
    for(var i = 0; i < text1Arr.length; i++){
        var row = key1Arr[i];
        if(keyArr[row][0].indexOf(text1Arr[i])!== -1){
            var orgchar = keyArr[row][0].indexOf(text1Arr[i]);
            output1Arr.push(keyArr[row][0][orgchar + key2Arr[i]]);
        }else if (keyArr[row][1].indexOf(text1Arr[i])!== -1){
            var orgchar = keyArr[row][1].indexOf(text1Arr[i]);
            output1Arr.push(keyArr[row][1][orgchar + key2Arr[i]]);   
        }else{ 
            output1Arr.push(text1Arr[i]);
        }
    }
    
    
    for(var i = 0; i < text2Arr.length; i++){
        var row = key2Arr[i];
        if(keyArr[row][0].indexOf(text2Arr[i])!== -1){
            var orgchar = keyArr[row][0].indexOf(text2Arr[i]);
            output2Arr.push(keyArr[row][0][orgchar + key1Arr[i]]);
        }else if (keyArr[row][1].indexOf(text2Arr[i])!== -1){
            var orgchar = keyArr[row][1].indexOf(text2Arr[i]);
            output2Arr.push(keyArr[row][1][orgchar + key2Arr[i]]);   
        }else{ 
            output2Arr.push(text2Arr[i]);
        }
    }
    
    
    
    document.getElementById("resultTwin1").innerHTML = output1Arr.join("");
    document.getElementById("resultTwin2").innerHTML = output2Arr.join("");
}

function decodeTwin(){
    var keyArr = [
    [
        ["a","o","u","å","_","a","o","u","å","_"],["0","1","2","3","4","0","1","2","3","4"]
    ],
    [
        ["e","i","y","ä","ö","e","i","y","ä","ö"],["5","6","7","8","9","5","6","7","8","9"]
    ],
    [
        ["b","d","t","k","g","b","d","t","k","g"],["(", ")", '"', "&", "#", "(", ")", '"', "&", "#"]
    ],
    [
        ["m","n","r","l","j","m","n","r","l","j"],["w","q","z","&uuml","!","w","q","z","&uuml","!"]
    ],
    [
        ["c","s","v","f","h","c","s","v","f","h"],["p","x","&eacute",".","?","p","x","&eacute",".","?"]
    ]
];
    var text1 = document.getElementById("textTwin1").value;
    text1 = text1.toLowerCase();
    var text2 = document.getElementById("textTwin2").value;
    text2 = text2.toLowerCase();
    var text1 = text1.replaceAll(" ", "_");
    var text2 = text2.replaceAll(" ", "_");
    var text1Arr = [];
    var text2Arr = [];
    var key1Arr = [];
    var key2Arr = [];
    var output1Arr = [];
    var output2Arr = [];
    
     //str to Arr
    for(var i = 0; i < text1.length; i++ ){
        text1Arr[i] = text1.charAt(i);
    }
    for(var i = 0; i < text1.length; i++ ){
        text2Arr[i] = text2.charAt(i);
    }
    
    //initialize keyArrs 
    for(var i = 0; i < text1Arr.length;i++){
        for(var j = 0; j < keyArr.length;j++){
            if(keyArr[j][0].indexOf(text1Arr[i])!== -1){
                key1Arr[i] = j;
            }else if(keyArr[j][1].indexOf(text1Arr[i])!== -1){
                key1Arr[i] = j;
            }
        }
    }
    for(var i = 0; i < text2Arr.length;i++){
        for(var j = 0; j < keyArr.length;j++){
            if(keyArr[j][0].indexOf(text2Arr[i])!== -1){
                key2Arr[i] = j;
            }else if(keyArr[j][1].indexOf(text2Arr[i])!== -1){
                key2Arr[i] = j;
            }
        }
    }
    
    key1Arr = key1Arr.concat(key1Arr);
    key2Arr = key2Arr.concat(key2Arr);
    
    for(var i = 0; i < text1Arr.length; i++){
        var row = key1Arr[i];
        if(keyArr[row][0].indexOf(text1Arr[i])!== -1){
            var orgchar = keyArr[row][0].indexOf(text1Arr[i])+5;
            output1Arr.push(keyArr[row][0][orgchar - key2Arr[i]]);
        }else{
            var orgchar = keyArr[row][1].indexOf(text1Arr[i])+5;
            output1Arr.push(keyArr[row][1][orgchar - key2Arr[i]]);   
        }
    }
    for(var i = 0; i < text2Arr.length; i++){
        var row = key2Arr[i];
        if(keyArr[row][0].indexOf(text2Arr[i])!== -1){
            var orgchar = keyArr[row][0].indexOf(text2Arr[i])+5;
            output2Arr.push(keyArr[row][0][orgchar - key1Arr[i]]);
        }else{
            var orgchar = keyArr[row][1].indexOf(text2Arr[i])+5;
            output2Arr.push(keyArr[row][1][orgchar - key1Arr[i]]);
        }
    }
    
    document.getElementById("resultTwin1").innerHTML = output1Arr.join("");
    document.getElementById("resultTwin2").innerHTML = output2Arr.join("");
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

function encodeT9(){
    var input = document.getElementById("textT9").value;
    input = input.toLowerCase();
    input = input.replaceAll(" ", "_");
    var message = [];
    
    var abc = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z', '_'];
    var code_abc = ["2", "22", "222", "3", "33", "333", "4", "44", "444", "5", "55", "555", "6", "66", "666", "7", "77", "777", "7777", "8", "88", "888", "9", "99", "999", "9999", "0"];
    
    for(var i = 0; i < input.length; i++){
        if(abc.indexOf(input[i])!== -1){
            var code = code_abc[abc.indexOf(input[i])];
            message.push(code);
        } else{
            message.push(input[i]);
        }
        
    }
    
    var final = message.join(" ");
    document.getElementById("resultT9").innerHTML = final;
}

function decodeT9(){
    var input = document.getElementById("textT9").value;
    input = input.toLowerCase();
    var inputArr = input.split(" ");
    var message = [];
    
    var abc = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z', '_'];
    var code_abc = ["2", "22", "222", "3", "33", "333", "4", "44", "444", "5", "55", "555", "6", "66", "666", "7", "77", "777", "7777", "8", "88", "888", "9", "99", "999", "9999", "0"];
    
    for(var i = 0; i < inputArr.length; i++){
        if(code_abc.indexOf(inputArr[i])!== -1){
            var text = abc[code_abc.indexOf(inputArr[i])];
            message.push(text);
        } else{
            message.push(inputArr[i]);
        }
        
    }
    var final = message.join("");
    final = final.replaceAll("_", " ");
    document.getElementById("resultT9").innerHTML = final;
}

function encodeSiff(){
    //get input from forms
    str = document.getElementById("textSiff").value;
    str = str.toLowerCase();
    optInputs = document.getElementById("optSiff").getElementsByTagName("LABEL");
    var optNum=2;
    for(var i = 0; i < optInputs.length;i++){
        if(optInputs[i].children[0].checked){
            optNum = i;
        }
    }
    
    
    //setting up alphabet arrays
    strArr = [];
    abcArr = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z','å','ä','ö'];
    
    //actual encoding, one char at the time.
    for(var i = 0; i < str.length; i++){
        strArr[i] = (abcArr.indexOf(str.charAt(i)) );
        if(strArr[i] === -1){
            strArr[i] = (str.charAt(i));
        }else{
            strArr[i] += optNum;
        }
        
        //console.log(strArr[i] + str.charAt(i));
        
    }
    
    result = document.getElementById("resultSiff");
    result.innerHTML = strArr.join("&nbsp");
};

function decodeSiff(){
   
    //get input from forms
    str = document.getElementById("textSiff").value;
    str = str.toLowerCase();
    optInputs = document.getElementById("optSiff").getElementsByTagName("LABEL");
    var optNum=2;
    for(var i = 0; i < optInputs.length;i++){
        if(optInputs[i].children[0].checked){
            optNum = i;
        }
    }
    
    
    
    //setting up alphabet arrays
    strArr = str.split(" ");
    abcArr = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z','å','ä','ö'];
    
    console.log(strArr);
    
    //actual decoding, one char at the time.
    for(var i = 0; i < strArr.length; i++){
        if(!isNaN(strArr[i]) && parseInt(strArr[i]) <= 29)
            strArr[i] = abcArr[strArr[i] - optNum];  
    }
    result = document.getElementById("resultSiff");
    result.innerHTML = strArr.join("");
    
};

function encodePlay(){
    var input = document.getElementById("playText").value;
    var keyword = document.getElementById("playKey").value;
    input = input.toLowerCase();
    keyword = keyword.toLowerCase();
    var specialChars = [];
    var output = [];
    var key = ["a", "b", "c", "d", "e", "f", "g","h", "i", "j", "k", "l", "m", "n", "o", "p", "r", "s", "t", "u", "v","y","å", "ä", "ö"];
    var prekey = [];
    
    for(var i = 0; i < keyword.length; i++){
        var index = key.indexOf(keyword[i]);
        if (index > -1) { 
            key.splice(index, 1); 
        }
        if (prekey.indexOf(keyword[i]) === -1){
           prekey.push(keyword[i]); 
        }
    }
    var key2 = prekey.concat(key);
    var keyFinal = [];
    for(var i = 0; i < key2.length; i += 5){
        keyFinal.push(key2.slice(i, i+5));
    }
    
    for(var i = 0; i < input.length; i++){
        var num = i + specialChars.length;
        if(key2.indexOf(input[i]) === -1){
            specialChars.push([num, input[i]]);
            input = input.slice(0, i) + input.slice(i+1);
        }
    }
    
    for(var i = 0; i < input.length; i+=2){
        if(input[i] === input[i+1]){
            input = input.slice(0, i+1) + "y" + input.slice(i+1);
            for(var j = 0; j < specialChars.length; j++){
                if(specialChars[j][0] > i){
                    specialChars[j][0]++;
                }
            }
        }
    }
    
    if(input.length % 2 === 1){
        input = input + "y";
        if(specialChars[-1][0] >= input.length){
            specialChars[-1][0]++;
        }
    } 
    
    for(var i = 0; i < input.length; i+=2){    
        var x1 = -1;
        var x2 = -1;
        var y1 = -1;
        var y2 = -1;
        
        for(var j = 0; j < keyFinal.length; j++){
            if(keyFinal[j].indexOf(input[i]) !== -1){
                y1 = j;
                x1 = keyFinal[j].indexOf(input[i]);
            }
            if(keyFinal[j].indexOf(input[i+1]) !== -1){
                y2 = j;
                x2 = keyFinal[j].indexOf(input[i+1]);
            }
        }
        
        if(x1 === x2){
            var letter1 = keyFinal[(y1+1)%5][x1];
            var letter2 = keyFinal[(y2+1)%5][x2];
        }else if(y1 === y2){
            var letter1 = keyFinal[y1][(x1+1)%5];
            var letter2 = keyFinal[y2][(x2+1)%5];
        }else{
            var letter1 = keyFinal[y1][x2];
            var letter2 = keyFinal[y2][x1];
        }
        output.push(letter1, letter2);
    }
    
    var outString = output.join("");
    
    for(var i = 0; i < specialChars.length; i++){
        outString = outString.slice(0, specialChars[i][0]) + specialChars[i][1] + outString.slice(specialChars[i][0]);
    }
    
    document.getElementById("resultPlay").innerHTML = outString;
}

function decodePlay(){
    var input = document.getElementById("playText").value;
    var keyword = document.getElementById("playKey").value;
    input = input.toLowerCase();
    keyword = keyword.toLowerCase();
    var specialChars = [];
    var output = [];
    var key = ["a", "b", "c", "d", "e", "f", "g","h", "i", "j", "k", "l", "m", "n", "o", "p", "r", "s", "t", "u", "v","y","å", "ä", "ö"];
    var prekey = [];
    
    for(var i = 0; i < keyword.length; i++){
        var index = key.indexOf(keyword[i]);
        if (index > -1) { 
            key.splice(index, 1); 
        }
        if (prekey.indexOf(keyword[i]) === -1){
           prekey.push(keyword[i]); 
        }
    }
    var key2 = prekey.concat(key);
    var keyFinal = [];
    for(var i = 0; i < key2.length; i += 5){
        keyFinal.push(key2.slice(i, i+5));
    }
    
    for(var i = 0; i < input.length; i++){
        var num = i + specialChars.length;
        if(key2.indexOf(input[i]) === -1){
            specialChars.push([num, input[i]]);
            input = input.slice(0, i) + input.slice(i+1);
        }
    }
    
    for(var i = 0; i < input.length; i+=2){    
        var x1 = -1;
        var x2 = -1;
        var y1 = -1;
        var y2 = -1;
        
        for(var j = 0; j < keyFinal.length; j++){
            if(keyFinal[j].indexOf(input[i]) !== -1){
                y1 = j;
                x1 = keyFinal[j].indexOf(input[i]);
            }
            if(keyFinal[j].indexOf(input[i+1]) !== -1){
                y2 = j;
                x2 = keyFinal[j].indexOf(input[i+1]);
            }
        }
        
        if(x1 === x2){
            var letter1 = keyFinal[(y1+4)%5][x1];
            var letter2 = keyFinal[(y2+4)%5][x2];
        }else if(y1 === y2){
            var letter1 = keyFinal[y1][(x1+4)%5];
            var letter2 = keyFinal[y2][(x2+4)%5];
        }else{
            var letter1 = keyFinal[y1][x2];
            var letter2 = keyFinal[y2][x1];
        }
        output.push(letter1, letter2);
    }
    
    var outString = output.join("");
    
    for(var i = 0; i < outString.length; i++){
        if(outString[i] === "y" && outString[i-1] === outString[i+1]){
            outString = outString.slice(0, i) + outString.slice(i+1);
            for(var j = 0; j < specialChars.length; j++){
                if(specialChars[j][0] >= i){
                    specialChars[j][0]--;                }
            }
        }
    }
    
    for(var i = 0; i < specialChars.length; i++){
        outString = outString.slice(0, specialChars[i][0]) + specialChars[i][1] + outString.slice(specialChars[i][0]);
    }
    
    document.getElementById("resultPlay").innerHTML = outString;
}

function encodeBrad(){
    var input = document.getElementById("bradText").value;
    document.getElementById("resultBrad").innerHTML = input;
}

function encodeRunes(){
    var input = document.getElementById("runeText").value;
    document.getElementById("resultRune").innerHTML = input;
}

function bokControl(choice){
    if(choice === "off"){
        document.getElementById("bokKey").style = "display: none;";
    }else if(choice === "on"){
        document.getElementById("bokKey").style = "display: block;";
    }
}

function encodeBok(){
    var abc_opt = document.getElementById("optBokAlph").getElementsByTagName("LABEL");
    var key_opt = document.getElementById("optBokKey").getElementsByTagName("LABEL");
    var str = document.getElementById("bokText").value;
    str = str.toLowerCase();
    
    var keyArr = [];
    var abcArr = [];
    var codeArr = [];
    var abc = [['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z','å','ä','ö'],
        ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','x','y','z','å','ä','ö'],
        ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']];
    for (var i = 0; i < abc_opt.length; i++){
        if(abc_opt[i].children[0].checked){
            abcArr = abc[i];
        }
    }
     
    keyArr = [...abcArr];
    
    if(key_opt[0].children[0].checked){
        for (let i = keyArr.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [keyArr[i], keyArr[j]] = [keyArr[j], keyArr[i]];
        }
    }else if(key_opt[1].children[0].checked){
        keyArr = keyArr.reverse();
    }else if(key_opt[2].children[0].checked){
        var key = document.getElementById("bokKey").value.toLowerCase();
        var prekey = [];
        for(var i = 0; i < key.length; i++){
            var index = keyArr.indexOf(key[i]);
            if (index > -1) { 
                keyArr.splice(index, 1); 
                if (prekey.indexOf(key[i]) === -1){
                    prekey.push(key[i]); 
                }
            } 
        }
        keyArr = prekey.concat(keyArr);
    }
    
    for(var i = 0; i < str.length; i++){
        var index = abcArr.indexOf(str[i]);
        if(index > -1){
            codeArr.push(keyArr[index]);
        }else{
            codeArr.push(str[i]);
        }
    }
    
    var finalMessage = codeArr.join("");
    document.getElementById("resultBok").innerHTML = finalMessage + "<br>" + keyArr.join(" ") ;
}

function decodeBok(){
    var abc_opt = document.getElementById("optBokAlph").getElementsByTagName("LABEL");
    var key_opt = document.getElementById("optBokKey").getElementsByTagName("LABEL");
    var str = document.getElementById("bokText").value;
    str = str.toLowerCase();
    
    var keyArr = [];
    var abcArr = [];
    var codeArr = [];
    var abc = [['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z','å','ä','ö'],
        ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','x','y','z','å','ä','ö'],
        ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']];
    for (var i = 0; i < abc_opt.length; i++){
        if(abc_opt[i].children[0].checked){
            abcArr = abc[i];
        }
    }
     
    keyArr = [...abcArr];
    
    if(key_opt[0].children[0].checked){
        for (let i = keyArr.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [keyArr[i], keyArr[j]] = [keyArr[j], keyArr[i]];
        }
    }else if(key_opt[1].children[0].checked){
        keyArr = keyArr.reverse();
    }else if(key_opt[2].children[0].checked){
        var key = document.getElementById("bokKey").value.toLowerCase();
        var prekey = [];
        for(var i = 0; i < key.length; i++){
            var index = keyArr.indexOf(key[i]);
            if (index > -1) { 
                keyArr.splice(index, 1); 
                if (prekey.indexOf(key[i]) === -1){
                    prekey.push(key[i]); 
                }
            } 
        }
        keyArr = prekey.concat(keyArr);
    }
    
    for(var i = 0; i < str.length; i++){
        var index = keyArr.indexOf(str[i]);
        if(index > -1){
            codeArr.push(abcArr[index]);
        }else{
            codeArr.push(str[i]);
        }
    }
    
    var finalMessage = codeArr.join("");
    document.getElementById("resultBok").innerHTML = finalMessage + "<br>" + keyArr.join(" ") ;
}
