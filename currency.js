
const currencyList=[
"USD","EUR","GBP","JPY","CAD","AUD","CHF","CNY","INR","ZAR","NAD","BRL","MXN","SGD","HKD","SEK","NOK","KRW","TRY","RUB",
"NZD","AED","SAR","THB","MYR","IDR","PHP","PKR","EGP","KES","GHS","NGN","BDT","LKR","MAD","TND","QAR","KWD","BHD"
]

const rates={USD:1,EUR:0.92,GBP:0.79,JPY:150,CAD:1.35,AUD:1.5,CHF:0.9,CNY:7.2,INR:83,ZAR:18.5,NAD:18.5}

const from=document.getElementById("from")
const to=document.getElementById("to")
const search=document.getElementById("search")

function populate(list){

from.innerHTML=""
to.innerHTML=""

list.forEach(c=>{

let o1=document.createElement("option")
o1.value=c
o1.text=c

let o2=document.createElement("option")
o2.value=c
o2.text=c

from.appendChild(o1)
to.appendChild(o2)

})

}

populate(currencyList)

search.addEventListener("input",()=>{

let term=search.value.toUpperCase()

let filtered=currencyList.filter(c=>c.includes(term))

populate(filtered)

})

function swap(){

let temp=from.value
from.value=to.value
to.value=temp

}

function convert(){

let amount=document.getElementById("amount").value

if(!amount){

document.getElementById("result").innerText="Enter amount"

return

}

let f=from.value
let t=to.value

let usd=amount/(rates[f]||1)

let converted=usd*(rates[t]||1)

document.getElementById("result").innerText=amount+" "+f+" = "+converted.toFixed(2)+" "+t

}
