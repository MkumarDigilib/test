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
