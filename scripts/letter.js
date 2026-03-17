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
