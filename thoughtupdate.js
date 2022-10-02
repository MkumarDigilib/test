var v=0,i=0,j=0,p=0,w=0,o=0,b=0,l=0
function englishthought(){

    
    v=parseInt(document.getElementById('v').value)
    i=parseInt(document.getElementById('i').value)
    j=parseInt(document.getElementById('j').value)
    p=parseInt(document.getElementById('p').value)
    w=parseInt(document.getElementById('w').value)
    o=parseInt(document.getElementById('o').value)
    b=parseInt(document.getElementById('b').value)
    l=parseInt(document.getElementById('l').value)
    var cd3=Math.floor((((((((((((((((v*i)*j)*p)/w)/o)/b)/l)*l)*b)*o)*w)/p)/j)/i)))
    let z=prompt("Enter the value")
    if(z==cd3){
        
        window.open('https://docs.google.com/spreadsheets/d/1DkWghzL-wUyYHf5D2-4ihGLEk3qCI4Tf818kzDcL-4U/edit#gid=1978111301&range=A2')
    }else{
        alert("Note: Only Admin can edit   !!!!")
    }
}

function hindithought(){

    
    v=parseInt(document.getElementById('v').value)
    i=parseInt(document.getElementById('i').value)
    j=parseInt(document.getElementById('j').value)
    p=parseInt(document.getElementById('p').value)
    w=parseInt(document.getElementById('w').value)
    o=parseInt(document.getElementById('o').value)
    b=parseInt(document.getElementById('b').value)
    l=parseInt(document.getElementById('l').value)
    var cd3=Math.floor((((((((((((((((v*i)*j)*p)/w)/o)/b)/l)*l)*b)*o)*w)/p)/j)/i)))
    let z=prompt("Enter the value")
    if(z==cd3){
        
        window.open('https://docs.google.com/spreadsheets/d/1DkWghzL-wUyYHf5D2-4ihGLEk3qCI4Tf818kzDcL-4U/edit#gid=63167100&range=A2')
    }else{
        alert("Note: Only Admin can edit   !!!!")
    }
}

function fetchenglishthought(){
    fetchhindithought()
    fetch("https://script.google.com/macros/s/AKfycbzY7jT_BcUxuC9UwEmfZFDDexD6G0IKAdEXcU7q-Da2PfNF6fW03a4ozkfliqZZJOtMRQ/exec")
     .then((data)=>{return data.json();
    }).then((completedata)=>{
        document.getElementById("englishthought").innerHTML=(completedata[0].englishthought)
        console.log(completedata[0].englishthought)})
}

function fetchhindithought(){
    fetch("https://script.google.com/macros/s/AKfycbzXpPCT4WiVMoKklSNwMYLnTO-pbZpKTt6MLwuX0XGDeGY7Gcbap1LNzMtkGu4il5S8fQ/exec")
     .then((data)=>{return data.json();
    }).then((completedata)=>{
        document.getElementById("hindithought").innerHTML=(completedata[0].hindithought)
        
        console.log(completedata[0].hindithought)})

}