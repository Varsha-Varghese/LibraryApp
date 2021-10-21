function loginvalidate(){
    const uname = loginpage.uname.value;
    const pwd = loginpage.pwd.value;
    
        if(uname =="" || pwd =="") {
         alert( "Fields cannot be empty" );
         
           return false;          
        }
        else if(uname == "admin" && pwd == "12345"){
            window.open("/books");
            return true;
        }
        else {
           alert("Invalid user name or password") ;
            
            return false;  
        }          
}