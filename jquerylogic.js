const cars = ["green", "red", "yellow","blue"];
var btn=""
runarray=[];
let i=0;
var k=0;
let j=0;
clickarray=[];
clickarrayfilterr=[];
var clickvalue=""
var runvalue=""
var withoutduplicate=[];
var counter=0;
var counter2=0;

function sleep(milliseconds) {
    const date = Date.now();
    let currentDate = null;
    do {
      currentDate = Date.now();
    } while (currentDate - date < milliseconds);
  }

$(document).keypress(function(event){
    var key=event.key;
    if (key == ("a" || "A")){ 
         counter=counter+1
         clc(counter)
    }
    if (counter===3){
        $('#level-title').text('Final Level');
    }else if(counter>3){
        $('#level-title').text('You Won');
        $('body').css("background-color","green");
        setTimeout(function(){
            location.reload(true);
            $('body').css("background-color","#011F3F");
            $('#level-title').text('Press A Key to Start');
            counter=0;
        },3000)
        
    }
    else{
        $('#level-title').text('Level '+counter);
    }
});    

function clickarrayfilter(clickarray){
    var l=0;
    for(var i=0;i<clickarray.length;){
         clickarrayfilterr[l++]=clickarray[i];
         i=i+3;
    }
}

function check(){
    clickarrayfilter(clickarray)
    for(var h=0;h<runarray.length;h++){
        if(runarray[h]===clickarrayfilterr[h]){
            
        }else{
            var audio=new Audio('sounds/wrong.mp3')
            audio.play();
            $('#level-title').text(' Game Over |\n!!! You Lost!!!');
            $('body').css("background-color","red");
            setTimeout(function(){
                location.reload(true);
               $('#level-title').text('Press A Key to Start');
               $('body').css("background-color","#011F3F")
             },3000)
    
            counter=0;
            //alert(runarray)
            //alert(clickarrayfilterr)

        }
    }   
}


$("div").click(function(event){
        counter2=counter2+1    
        val(event.target.id);
        $("#"+event.target.id).animate({opacity:'0.2'})
        var audio = new Audio("sounds/"+event.target.id+".mp3")
        if(counter2==3){
            audio.play();
        }
        setTimeout(function(){
            $("#"+event.target.id).animate({opacity:'1.0'})
            if(counter2===3){  
            counter2=0;
        }
        },200)           
})



function clc(counter){
    //alert(counter)
    check()
    sleep(400)
    var vall=cars[Math.floor(Math.random() * 4)]
    btn="#"+vall
    runarray[i++]=vall
    $(btn).animate({opacity:'0.2'})
    var audio = new Audio("sounds/"+vall+".mp3")
    audio.play();
    setTimeout(function(){
        $(btn).animate({opacity:'1.0'})
        sleep(200)
        switch(counter){
            case 1:
                break;
            case 2:
                
                var vall1=cars[Math.floor(Math.random() * 4)]
                btn1="#"+vall1
                runarray[i++]=vall1
                $(btn1).animate({opacity:'0.2'})
                var audio = new Audio("sounds/"+vall1+".mp3")
                audio.play();
                setTimeout(function(){
                    $(btn1).animate({opacity:'1.0'})
                    sleep(200)
                },200)
                break;
            case 3:
                
                var vall2=cars[Math.floor(Math.random() * 4)]
                btn2="#"+vall2
                runarray[i++]=vall2
                $(btn2).animate({opacity:'0.2'})
                var audio = new Audio("sounds/"+vall2+".mp3")
                audio.play();
                setTimeout(function(){
                    $(btn2).animate({opacity:'1.0'})
                    sleep(200)
                    var vall4=cars[Math.floor(Math.random() * 4)]
                    btn3="#"+vall4
                    runarray[i++]=vall4
                    $(btn3).animate({opacity:'0.2'})
                    var audio = new Audio("sounds/"+vall4+".mp3")
                    audio.play();
                    setTimeout(function(){
                        $(btn3).animate({opacity:'1.0'})
                        sleep(200)
                    },200)

                },200)
                break;
        }
    },200)
     
    
}



/*$(".check").click(function(){
    //alert(runarray)
    clickarrayfilter(clickarray)
    alert(runarray)
    alert(clickarrayfilterr)
    alert(counter)
})*/


function val(clickvalue){

    clickarray[j++]=clickvalue;

}
