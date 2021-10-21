
function mobvalidate(){
    var mob = signupform.mob.value;
    let mobno = /^\(?(\d{3})\)?[-\. ]?(\d{3})[-\. ]?(\d{4})$/;
    if(mobno.test(mob)==false){
       l1.hidden = false;
       l1.style.color = "red";
        l1.innerHTML = "Please enter a valid phone number!";
        mob.focus();
        return false;
      }
      while(mobno.test(mob)==true){
        l1.hidden = false;
        l1.style.color = "white";
         l1.innerHTML = "Valid";
        return true;
      }
}
function emailvalidate(){
    var mail = signupform.email.value;
    let regexpe = /^([A-Za-z0-9\.-]+)@([A-Za-z0-9\-]+)\.([a-z]{2,3})(.[a-z]{2,3})?$/;
    while(regexpe.test(mail)==true){
      l2.hidden = false;
      l2.style.color = "white";
        l2.innerHTML="Valid";
       return true;
      }
    if(regexpe.test(mail)==false){
      l2.hidden = false;
      l2.style.color = "red";
        l2.innerHTML="Please enter a valid email id!";
        mail.focus();
        return false;
      }      
}
function pwdvalidate(){
  var pwd1 = signupform.pwd1.value;
  var pwd2 = signupform.pwd2.value;

  while (pwd1!=pwd2){
    l3.hidden= false;
    l3.style.color = "red";
    l3.innerHTML = "Passwords must be same";
    pwd2.focus();
    return false;
}
   if(pwd1==pwd2){
     l3.hidden= true;
     return true;
   }
}

