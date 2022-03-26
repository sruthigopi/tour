
function emailvalidate(){
let email = document.getElementById("email");
let msg1 = document.getElementById("msg1");
let ck =document.getElementById("ck");


 let regex = /^([a-zA-Z0-9\.\-]+)@([A-Za-z0-9\-]+)\.([a-z]{2,3})(.[a-z]{2,3})?$/;
    if(regex.test(email.value)){
  msg1.innerHTML ="Email Id Is Valid";
  msg1.style.color = "green";
     email.style.border = '1px solid green';
     ck.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
     ck.style.color = "seagreen";
    return true;
     }
     else{
       msg1.innerHTML = '**Your Email Id Is Invalid';
      msg1.style.color ='red';
         email.style.border ='1px solid red';
         ck.innerHTML ='<i class="fa-solid fa-circle-exclamation"></i>'
         ck.style.color = "red";
         return false;
             }
            }
     function pwdvalidate(){
      let pwd1 = document.getElementById("pwd");
      let pwd = document.getElementById("pwd").value;
    let msg= document.getElementById("msg");  
    let ckp =document.getElementById("ckp");
     
//weak password
if(pwd.length<8){
  //password length must be greater than 8 charector
  msg.innerHTML = '**Password length must be 8 charecter';
  msg.style.color ="red";
   pwd1.style.border = "2px solid red";
   ckp.innerHTML ='<i class="fa-solid fa-circle-exclamation"></i>'
         ckp.style.color = "red";
  return false;
}
//week password
else if(pwd.search(/[a-z]/)==-1){
  //must include atleast one lowecase 
    msg.innerHTML = 'Password must include atleast one lowercase';
  msg.style.color ="orange";
  pwd1.style.border = "2px solid red";
  ckp.innerHTML ='<i class="fa-solid fa-triangle-exclamation"></i>'
  ckp.style.color = "orange"
  return false;
}
//medium passwored
  else if(pwd.search(/[0-9]/)==-1){
    //must include atleat one number
    msg.innerHTML = 'Password must include atleast one number';
  msg.style.color ="orange";
  pwd1.style.border = "2px solid orange";
  ckp.innerHTML ='<i class="fa-solid fa-triangle-exclamation"></i>'
  ckp.style.color = "orange"
  return false;
}

//medium password 
else if(pwd.search(/[A-Z]/)==-1){
  //must include atleast one upper case
    msg.innerHTML = 'Password must include atleast one uppercase';
  msg.style.color ="orange";
  pwd1.style.border = "2px solid orange";
  ckp.innerHTML ='<i class="fa-solid fa-triangle-exclamation"></i>'
  ckp.style.color = "orange"
  return false;
}else{
// /strong password
  msg.innerHTML = 'Your Password Is strong';
  msg.style.color ="green";
  pwd1.style.border = "2px solid green"; 
  ckp.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
     ckp.style.color = "seagreen";
   return true;
  }

  }
  function validateform(){
    
    if(!emailvalidate() ||!pwdvalidate()){
      let ckmsg = document.getElementById("ckmsg");
      ckmsg.style.display ='block';
    ckmsg.innerHTML = '**please fix the error';
    ckmsg.style.color ="red";
    setTimeout(function(){ ckmsg.style.display ='none';},3000);

return false;
    }
  }
