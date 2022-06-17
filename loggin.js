function validatelogin(){
    var user = document.getElementById("username").value;
    if(user == ""){
      document.getElementById('errorusername').innerHTML="Please fill the username feild";
      return false;
    }
  
  }