document.addEventListener("DOMContentLoaded", function() {
   const form = document.getElementById("contactForm");
   form.addEventListener("submit",(e)=>{
       e.preventDefault();
       alert("Your details are submitted");
       e.target.reset();
   });

  
   
})


 function Photo(name,src,information){

    this.name = name,
    this.src = src,
    this.information = information,
    this.date = new Date();

 }

 


    

 