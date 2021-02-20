function getpara1(){
var inputs=[];
for(var i = 1; i<=6; i++){

    inputs.push(document.getElementById("input_box_" + i).value);

}

inputs.join (" ");
document.getElementById("show_para_1").innerHTML=inputs.join(" ")

}

function getpara2(){
    var inputs=[];
    for(var i = 1; i<=6; i++){
    
        inputs.push(document.getElementById("input_box" + i).value);
    
    }
    
    inputs.join (" ");
    document.getElementById("show_para_2").innerHTML=inputs.join(" ")
    
    }