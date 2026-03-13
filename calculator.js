
const display=document.getElementById("display")

function append(v){
display.value+=v
}

function clearDisplay(){
display.value=""
}

function deleteLast(){
display.value=display.value.slice(0,-1)
}

function calculate(){
try{
let result=eval(display.value)
if(!isFinite(result)) throw Error()

addHistory(display.value+" = "+result)

display.value=result
}catch{
display.value="Error"
}
}

function square(){
display.value=Math.pow(eval(display.value),2)
}

function sqrt(){
display.value=Math.sqrt(eval(display.value))
}

document.addEventListener("keydown",e=>{

if("0123456789+-*/.".includes(e.key)) append(e.key)

if(e.key==="Enter") calculate()

if(e.key==="Backspace") deleteLast()

})
