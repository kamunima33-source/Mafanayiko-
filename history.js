
const historyList=document.getElementById("historyList")

function loadHistory(){

let history=JSON.parse(localStorage.getItem("history"))||[]

historyList.innerHTML=""

history.forEach((h,i)=>{

let li=document.createElement("li")

li.innerHTML=h+` <button onclick="deleteHistory(${i})">X</button>`

historyList.appendChild(li)

})

}

function addHistory(h){

let history=JSON.parse(localStorage.getItem("history"))||[]

history.unshift(h)

localStorage.setItem("history",JSON.stringify(history))

loadHistory()

}

function deleteHistory(i){

let history=JSON.parse(localStorage.getItem("history"))||[]

history.splice(i,1)

localStorage.setItem("history",JSON.stringify(history))

loadHistory()

}

function clearHistory(){

localStorage.removeItem("history")

loadHistory()

}

window.onload=loadHistory
