
     let btnThemes=document.getElementById("btnThemes");
     document.getElementById("btnThemes").textContent="Light Themes";
     if(localStorage.getItem('theme_data')!=null){
        let element= document.getElementById("Themes");
        const themesJson=localStorage.getItem('theme_data');
        let data=JSON.parse(themesJson);
        element.classList.toggle(data.themes);
        document.getElementById("btnThemes").textContent="Dark Themes";
      }else{
        document.getElementById("btnThemes").textContent="Light Themes";
      }
     //add click event
     btnThemes.addEventListener("click", function() {
         let element= document.getElementById("Themes");    
         if(btnThemes.textContent=="Dark Themes"){     
          
            //remove the localStorage 
          if(localStorage.getItem('theme_data')!=null){
            localStorage.removeItem('theme_data');
         }
            document.getElementById("btnThemes").textContent="Light Themes";
            element.classList.toggle("lightThemesStyle");
         }else{
          console.log("Light Themes"); 
          let themesData={
           "themes":"lightThemesStyle"
         };
           localStorage.setItem("theme_data",JSON.stringify(themesData));
           document.getElementById("btnThemes").textContent="Dark Themes";
           element.classList.toggle("lightThemesStyle");
           console.log("Dark Themes"); 
         }
     });
    
     
      
     //a little flair by having an animated menu, resizable item, or interactive highlighting 
     let ul=document.getElementById("navbarUL");
     var lis=ul.getElementsByTagName("li");
     for(let i=0;i<lis.length;i++){
         console.log(lis[i]);
         console.log(lis[i].children);
         lis[i].addEventListener("click",function(){
          console.log('onmouse');
           lis[i].style.backgroundColor="red";
        });
         lis[i].onmouseover=function(){
            lis[i].classList.add("li-themes");
          };
          lis[i].onmouseout=function(){
               lis[i].classList.remove("li-themes");
          };
      }


function selectDateAndTime(){
  const form = document.querySelector("form"); 
  form.addEventListener("submit", (event) => {
    console.log('form');
      let myDateTime=document.querySelector("input[name=myDateTime]:checked").value;
      let  dateAndTimeDiv=document.getElementById("dateAndTimeDiv");
      let str="";
      const monthArr=new Array(
        "Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"
      );
      const weekArr=new Array(
        "Sun","Mon","Tue","Wed","Thur","Fri","Sat"
      );
      const date=new Date();
      const year=date.getFullYear();
      const month=date.getMonth();
      const day=date.getDate();
      const w=date.getDay();
      let hour=date.getHours();
      const minute=date.getMinutes();
      const second=date.getSeconds();
      if(day<10){
         day="0"+day;
      }
      let timeShow="";
      if(hour>12){
        hour=hour-12;
         timeShow=" PM";
      }else{
        timeShow=" AM";
      }
      if(myDateTime=="Date"){
          str=weekArr[w]+" "+monthArr[month]+"  "+day+"  "+year;
      }else{ 
          str=hour+":"+minute+":"+second +" "+timeShow ;
      }
      if(document.getElementById("datetime-P")==null){
         let p=document.createElement('p');
          p.id="datetime-P";
          p.innerHTML=str;
          //using a dynamically added element
          dateAndTimeDiv.appendChild(p);
       }else{
        document.getElementById("datetime-P").innerHTML=str;
       } 
      event.preventDefault();
  }, false);
}