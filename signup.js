// phoneno validation
function phnovalidate(){
let phone1 = document.getElementById("phone");
let msgph = document.getElementById("msgph");
let ckph =document.getElementById("ckph");
  
let regex =/^([0-9]){3}[(\s\.\-)]?([0-9]){3}[(\.\-\s)]?([0-9]){4}$/;
if(regex.test(phone1.value)){
  msgph.innerHTML = "phone number is valid"
  msgph.style.color = "green";
  phone1.style.border = "2px solid green"
  ckph.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
  ckph.style.color = "seagreen";
   return true;
}
else{
  msgph.innerHTML = "**phone number is invalid";
  msgph.style.color = "red";
  phone1.style.border = "2px solid red";
  ckph.innerHTML ='<i class="fa-solid fa-circle-exclamation"></i>'
  ckph.style.color = "red";
  return false;
}}
function emailvalidate(){
// email validation
let email = document.getElementById("email");
let msgem = document.getElementById("msgem");
let ck =document.getElementById("ck");

    let regex1 = /^([a-zA-Z0-9\.\-]+)@([A-Za-z0-9\-]+)\.([a-z]{2,3})(.[a-z]{2,3})?$/;
    if(regex1.test(email.value)){
      msgem.innerHTML ="Email Id Is Valid";
      msgem.style.color = "green";
  email.style.border = '1px solid green';
  ck.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
     ck.style.color = "seagreen";
   return true;
    }
    else{
      msgem.innerHTML = '**Email Id Is Invalid';
      msgem.style.color ='red';
        email.style.border ='1px solid red';
        ck.innerHTML ='<i class="fa-solid fa-circle-exclamation"></i>'
        ck.style.color = "red";
        return false;
    }
  }
  function pwdvalidate(){
// password validation

  let pwd1 = document.getElementById("pwd");
  let pwd = document.getElementById("pwd").value; 
 let msgpw= document.getElementById("msgpw");
 let ckp =document.getElementById("ckp");

  //weak password
  if(pwd.length<8){
    //password length must be greater than 8 charector
    msgpw.innerHTML = '**Password length must be 8 charecter';
    msgpw.style.color ="red";
     pwd1.style.border = "2px solid red";
     ckp.innerHTML ='<i class="fa-solid fa-circle-exclamation"></i>'
    ckp.style.color = "red";
    return false;
  }

  //medium passwored
    else if(pwd.search(/[0-9]/)==-1){
      //must include atleat one number
      msgpw.style.color ="orange";
      msgpw.innerHTML = 'Password must include atleast one number'; 
    pwd1.style.border = "2px solid orange";
    ckp.innerHTML ='<i class="fa-solid fa-triangle-exclamation"></i>'
  ckp.style.color = "orange"
     return false;
  }
  //week password
  else if(pwd.search(/[a-z]/)==-1){
    //must include atleast one lowecase 
    msgpw.innerHTML = 'Password must include atleast one lowercase';
    msgpw.style.color ="orange";
    pwd1.style.border = "2px solid red";
    ckp.innerHTML ='<i class="fa-solid fa-triangle-exclamation"></i>'
  ckp.style.color = "orange"
    return false;
  }
  //medium password 
  else if(pwd.search(/[A-Z]/)==-1){
    //must include atleast one upper case
    msgpw.innerHTML = 'Password must include atleast one uppercase';
    msgpw.style.color ="orange";
    pwd1.style.border = "2px solid orange";
    ckp.innerHTML ='<i class="fa-solid fa-triangle-exclamation"></i>'
  ckp.style.color = "orange"
    return false;
  }else{
  // /strong password
  msgpw.innerHTML = 'Password Is strong';
  msgpw.style.color ="green";
    pwd1.style.border = "2px solid green"; 
    ckp.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
     ckp.style.color = "seagreen";
      return true;
    }
  }
  
// password conformation
function cpwdvalidate(){
// let pwd = document.getElementById("pwd");
   let cpwd = document.getElementById("cpwd");
   let msgcpw = document.getElementById("msgcpw");
   let ckcp =document.getElementById("ckcp");
     if(pwd.value !=cpwd.value){
      msgcpw.innerHTML = "**passwords must be same";
      msgcpw.style.color = "red";
      cpwd.style.border = "2px solid red";
      ckcp.innerHTML ='<i class="fa-solid fa-circle-exclamation"></i>'
      ckcp.style.color = "red";
       return false;
     }
     else{
      msgcpw.innerHTML = "password is same";
      msgcpw.style.color = "green";
      
      cpwd.style.border = "2px solid green";
      ckcp.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
      ckcp.style.color = "seagreen";
      return true;
     }
   }
   function validateform(){
    
    if(!phnovalidate() || !emailvalidate()|| !pwdvalidate()|| !cpwdvalidate()){
      let ckmsg = document.getElementById("ckmsg");
      ckmsg.style.display ='block';
    ckmsg.innerHTML = '**please fix the error';
    ckmsg.style.color ="red";
    setTimeout(function(){ ckmsg.style.display ='none';},3000);

return false;
    }
  }