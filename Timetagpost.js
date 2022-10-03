

function generatetimetag(){
 
const now = new Date()  
const utcMilllisecondsSinceEpoch = now.getTime() + (now.getTimezoneOffset() * 60 * 1000)  
const utcSecondsSinceEpoch = Math.round(utcMilllisecondsSinceEpoch / 1000)
console.log(utcSecondsSinceEpoch)
document.getElementById('time').value=String(utcSecondsSinceEpoch)
console.log(document.getElementById('time').value)
}


//https://script.google.com/macros/s/AKfycbzgFfpPXAOISI9RaidKLGJDeFHJxf-mmQ4LgZ8F1zxmf9cfpRdlK8S33D2DWgtA5PYq/exec