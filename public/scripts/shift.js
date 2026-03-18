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