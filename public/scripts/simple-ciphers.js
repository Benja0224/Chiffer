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

function encodeBrad(){
    var input = document.getElementById("bradText").value;
    document.getElementById("resultBrad").innerHTML = input;
}

function encodeRunes(){
    var input = document.getElementById("runeText").value;
    document.getElementById("resultRune").innerHTML = input;
}