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