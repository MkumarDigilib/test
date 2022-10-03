var color=['brown','red','blue','warning','pink']
var num_sec=432000
var tag_name=''
var file_data
    fetch('https://script.google.com/macros/s/AKfycbzf2QLs_qOM1BZo23tvWCtULNuAotQtRxG-uAS6sjoN6a_eJ0Q-ixdG2Fu3q_THdEkN/exec')
     .then((data)=>{return data.json();
     }).then((completedata)=>{
        console.log(completedata)
        let data1="";
        completedata.map((values)=>{
          function getRandomInt(max) {
            return Math.floor(Math.random() * max);
          }

          post_time=values.time
          const now = new Date()  
          const utcMilllisecondsSinceEpoch = now.getTime() + (now.getTimezoneOffset() * 60 * 1000)  
          const utcSecondsSinceEpoch = Math.round(utcMilllisecondsSinceEpoch / 1000)
          if( (utcSecondsSinceEpoch - post_time) <= num_sec){
               tag_name='New'
          }
          else{
             tag_name=''
          }
          
          
          var indexofarray=getRandomInt(5)
          var colorvalue=color[indexofarray]
          if(values.Link != ''){
         data1+=`<div class="card" id="cardcolor">
         <h6 id="tag" name="tag" style=" color:white;  background-color:blue; margin-left:90% ; position:absolute;"  >${tag_name}</h6>
         <div class="card__header"> 
           <img style="height:100%; display:inline-block; width: 50%; margin-left:25%;" src="${values.imageurl}" alt="card__image" class="card-img-top" >
         </div>
         <div class="card__body">
           <span class="tag tag-${colorvalue}">${values.type}</span>
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
       </div>`
;}
        });
       document.getElementById("arrayoflinks").innerHTML=data1;         
     }).catch((err)=>{
      console.log(err);
     })


function create_post(){
  document.getElementById('postlink').href="adminvalidation.html"
}
