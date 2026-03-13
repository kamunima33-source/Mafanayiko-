
function convertUnit(){

let val=document.getElementById("unitInput").value
let type=document.getElementById("unitType").value

if(!val){

document.getElementById("unitResult").innerText="Enter value"

return
}

let result

if(type==="km") result=val*0.621371
if(type==="kg") result=val*2.20462
if(type==="c") result=(val*9/5)+32

document.getElementById("unitResult").innerText=result.toFixed(2)

}
