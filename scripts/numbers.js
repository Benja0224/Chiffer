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