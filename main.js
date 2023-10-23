let icon = document.getElementById("icon")
let nav = document.getElementById('nav')
let icon1 = document.getElementById('down1')
let icon2 = document.getElementById('down2')
let icon3 = document.getElementById('down3')
let container1 = document.getElementById('faq-container1')
let container2 = document.getElementById('faq-container2')
let container3 = document.getElementById('faq-container3')
let text1 = document.getElementById('para1')
let text2 = document.getElementById('para2')

////var section//////////
nav.classList.add('nne')

icon.onclick = function(){
    nav.classList.toggle('nne')
}
var x = true;

icon1.onclick= function(){
if(x==true){

    container1.style.height = "100px"
    text1.innerText= "hbuyfjàçvixvu)dfà_bç)foc";
    x=false;
}
else{
    container1.style.height = "50px"
    text1.innerText= null;

    x=true;
   
}
    
}
var y = true
icon2.onclick= function(){
    if(y==true){
    
        container2.style.height = "100px"
        text2.innerText= "sorry sir i cant do this";
        y=false;
    }
    else{
        container2.style.height = "50px"
        text2.innerText= null;
    
        y=true;
       
    }
        
    }
    



