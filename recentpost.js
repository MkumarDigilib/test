var color=['brown','red','blue','warning','pink']
var i=0;
var file_data
    fetch('https://script.google.com/macros/s/AKfycbzf2QLs_qOM1BZo23tvWCtULNuAotQtRxG-uAS6sjoN6a_eJ0Q-ixdG2Fu3q_THdEkN/exec')
     .then((data)=>{return data.json();
     }).then((completedata)=>{
        console.log(completedata.length)
        var i2=completedata.length-3
        let data1="";
        completedata.map((values)=>{
          function getRandomInt(max) {
            return Math.floor(Math.random() * max);
          }
          i=i+1;
          console.log(i)
          var indexofarray=getRandomInt(5)
          var colorvalue=color[indexofarray]
          if(values.Link != '' &&  i>=i2){
         data1+=`<div class="card" style="display: flex;
         flex-direction: column;
         width: clamp(20rem, calc(20rem + 2vw), 22rem);
         overflow: hidden;
         box-shadow: 0 .1rem 1rem rgba(0, 0, 0, 0.1);
         border-radius: 1em;
         background: #f5c89b;
       background: linear-gradient(to right, #f1f4f5, #d2d5d5);
       margin: 0 auto; margin-top:1%;" id="cardcolor">
         <div class="card__header">
           <img style="height:100%; display:inline-block; width: 50%; margin-left:;" src="${values.imageurl}" alt="card__image" class="card-img-top" >
         </div>
         <div class="card__body" style="padding: 1rem;
         display: flex;
         flex-direction: column;
         gap: .5rem; ">
           <span style="align-self: flex-start;
           padding: .25em .75em;
           border-radius: 1em;
           font-size: .75rem;"class="tag tag-${colorvalue}">${values.type}</span>
           <h4>${values.titles}</h4>
           <p>${values.detail}</p>
         </div>
         <div class="card__footer">
           <div class="user">
             
             <div class="user__info">
               <span class="tag tag-green"><a target="_blank" style="text-decoration: none; color: white; font-size:15px;"href="${values.Link}">Click</a></span>
               
             </div>
           </div>
         </div>
       </div><br>`
;}
        });
       document.getElementById("arrayoflinks").innerHTML=data1;         
     }).catch((err)=>{
      console.log(err);
     })


