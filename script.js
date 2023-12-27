var billAmt=document.getElementById("bill");
var tipAmt=document.getElementById("tip");
var result=document.getElementById("result");
const btnEle=document.getElementById("btn");

function calculateTip(){
    var billValue=billAmt.value;
    var tipValue=tipAmt.value;
    if(billValue==="" || tipValue==""){
        alert("please enter values properly!");
    }
    else{
        var resultValue= billValue * (1 + tipValue/100);
    }
    result.innerText=`Total is: ` + resultValue.toFixed(2) ;
    
}

btnEle.addEventListener("click", calculateTip);