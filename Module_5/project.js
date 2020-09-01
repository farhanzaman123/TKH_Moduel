const weekly Income = parseInt(prompt("weekly Income:"))
const Food Cost = parseInt(prompt("Food Cost:"))
const Housing Cost = parseInt(prompt("Houseing Cost:"))
const Transportation Cost = parseInt(prompt("Transportation Cost:"))
const Other Cost = parseInt(prompt("Other Cost:"))
const save=parseInt(prompt("save:"))/52
const x=weekly Income-(Foodt Cost+Housing Cost+Tranportation Cost+Other Cost)
const y=save-x

if (save<x){
  console.log("you are on track")
}
else{
  console.log("You need to save up",y,"more to stay on track")
}
