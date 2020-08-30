/*const nameInput=document.querySelector("#nameInput");
nameInput.addEventListener("input", function(event){
    console.log(event.target.value)
})
const button=document.querySelector("#send")

function sendButton(){
    console.log("se da click")
    console.log("nameInput", nameInput.value)
    if(nameInput.value){
        console.log("Validare")
    }else{
        nameInput.getElementsByClassName.border="2px solid red";
    }
}
button.addEventListener("click",sendButton)
*/

let fname=document.querySelector("#fname");
let lname=document.querySelector("#lname");
let form=document.querySelector("#form");
let confirmation=document.querySelector("#confirmation")
 let message=document.querySelector("#message")


form.addEventListener("submit",(event)=>{
    event.preventDefault();

 validation();
 

});


function validation(){
  let fnameValue=fname.value.trim();
  let lnameValue=lname.value.trim();
 
  let text="Thank you for contacting us";

  if(fnameValue===""){
  console.log("insert first name")
fname.style.border="1px solid red ";
confirmation.style.display="none";
 }
  else{
    console.log("valid");
  
  };

  if(lnameValue===""){
  console.log("insert last name")
  lname.style.border="3px solid red ";
  confirmation.style.display="none";
  }else{
    console.log("valid");
    confirmation.style.display="inherit";  
    message.innerHTML=text+ " , " +fnameValue;
  return true;
  }
  
  }


