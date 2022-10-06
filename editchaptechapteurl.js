var v=0,i=0,j=0,p=0,w=0,o=0,b=0,l=0
function changeurl(){

    
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
        
        window.open('https://docs.google.com/spreadsheets/d/1DkWghzL-wUyYHf5D2-4ihGLEk3qCI4Tf818kzDcL-4U/edit#gid=0','_blank')
    }else{
        alert("Note: Only Admin can edit this panel  !!!!")
    }
}


function fetchurl(){
    fetch("https://script.google.com/macros/s/AKfycbxQrMtNH0GxUvGwkTWKMfW_jBdXD5IYAi_dPcU1kfyh3DeYHUR9QeTwZ0C37x45zeV1/exec")
     .then((data)=>{return data.json();
    }).then((completedata)=>{
        document.getElementById("chaptechapteurl").href=(completedata[0].url)
        document.getElementById("chaptechapteurl2").href=(completedata[0].url)
        console.log(completedata[0].url)})
        stime()
}

function stime(){
    const time= new Date()
    let h=time.getHours()
    let m=time.getMinutes()
    let s=time.getSeconds()
    let milli=time.getMilliseconds()
    h=checktimeunit(h)
    m=checktimeunit(m)
    s=checktimeunit(s)
    console.log(h,m,s)
    document.getElementById('tmt').innerHTML=h + ":" + m + ":" + s +" "+"IST" ;
    setTimeout(stime,1000)
    }
  
function checktimeunit(i){
  
      if(i<10){i = "0" + i}
      return i
  
}
