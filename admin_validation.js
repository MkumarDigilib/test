var v=0,i=0,j=0,p=0,w=0,o=0,b=0,l=0
let value2=''

function generateotp(){
    let val_random = Math.floor(1000 + Math.random() * 9000);
                random_val = val_random.toString();
                document.getElementById("otp").value=random_val
                value2=random_val
}


function check(){
    let enteredotp=document.getElementById('otp2').value
    if(enteredotp == value2){
     window.location.href="update.html"
    }
    else{
        alert("Wrong OTP (NOTE: Only admin has the access to create post)")
    }
    console.log(value2)
}



function valuecheck(){

    
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
        document.getElementById('sendotptomail').action="https://formspree.io/f/mvoyrpow"
        document.getElementById('sendotptomail').target="_blank"
    }else{
        alert("Note: Only Admin can edit this panel  !!!!")
        document.getElementById('sendotptomail').action=""
        document.getElementById('sendotptomail').target=""
    }
}
