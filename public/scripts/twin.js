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