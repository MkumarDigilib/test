var color=['brown','red','blue','warning','pink']
var num_sec=259200
var tag_name=''
var file_data
var link=[],Type=[],Title=[],Detail=[],image=[],tmt=[]
    fetch('https://script.google.com/macros/s/AKfycbzf2QLs_qOM1BZo23tvWCtULNuAotQtRxG-uAS6sjoN6a_eJ0Q-ixdG2Fu3q_THdEkN/exec')
     .then((data)=>{return data.json();
     }).then((completedata)=>{
        console.log(completedata)
        
        completedata.map((values)=>{
             link.push(values.Link)
             Type.push(values.type)
             Title.push(values.titles)
             Detail.push(values.detail)
             image.push(values.imageurl)
             //tag.push(values.tag_name)
             tmt.push(values.time)

        });
       //document.getElementById("arrayoflinks").innerHTML=data1; 
       temp();        
     }).catch((err)=>{
      console.log(err);
     })



function temp(){
    s=(Title.length)-1
    first_four=s-4
    let data1="";
    for(let i=s;i>=first_four;i--){

        function getRandomInt(max) {
            return Math.floor(Math.random() * max);
          }
    
          post_time=tmt[i]
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
          if(link[i] != ''){
         data1+=`<div class="card" style="display: flex;
         flex-direction: column;
         width: clamp(20rem, calc(20rem + 2vw), 22rem);
         overflow: hidden;
         box-shadow: 0 .1rem 1rem rgba(0, 0, 0, 0.1);
         border-radius: 1em;
         background: #f5c89b;
       background: linear-gradient(to right, #f1f4f5, #d2d5d5);
       margin: 0 auto; margin-top:1%;" id="cardcolor">
       <h6 id="tag" name="tag" style=" color:white;  background-color:blue; margin-left:90% ; position:absolute;"  >${tag_name}</h6>
         <div class="card__header">
           <img style="height:100%; display:inline-block; width: 50%; margin-left:;" src="${image[i]}" alt="card__image" class="card-img-top" >
         </div>
         <div class="card__body" style="padding: 1rem;
         display: flex;
         flex-direction: column;
         gap: .5rem; ">
           <span style="align-self: flex-start;
           padding: .25em .75em;
           border-radius: 1em;
           font-size: .75rem;"class="tag tag-${colorvalue}">${Type[i]}</span>
           <h4>${Title[i]}</h4>
           <p>${Detail[i]}</p>
         </div>
         <div class="card__footer">
           <div class="user">
             
             <div class="user__info">
               <span class="tag tag-green"><a target="_blank" style="text-decoration: none; color: white; font-size:15px;"href="${link[i]}">Click</a></span>
               
             </div>
           </div>
         </div>
       </div><br>`
    ;}

     

    }

    document.getElementById("arrayoflinks").innerHTML=data1;
    
}
