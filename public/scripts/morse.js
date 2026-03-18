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