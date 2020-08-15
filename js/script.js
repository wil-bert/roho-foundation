var myFunction= function(){
    var username= document.getElementById("name");
    var email=document.getElementById("email");
    var message=document.getElementById("message");

    if(username.value==="" || username.value===null) {
        return false;
    } else if (email.value==="" || email.value===null){
        return false;
    } else if (message.value==="" || message.value===null){
        return false;
    } else {
        alert(" Thank you "+ username.value +"for reaching out. Message received.");
    }
  };
