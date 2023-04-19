


var mail = document.getElementById("emailid");
var passs = document.getElementById("pass");
var button = document.getElementById("login");



var username = new Array();
var password = new Array();

username=["default@gmail.com"];
password=["default"];




window.onload = function() {
    // your code here
    button.addEventListener("click",function(){
       // alert("This Button is Clicked");
        for (var i=0;i<username.length;i++){
            if (mail.value===username[i]){
                for (var j=0;j<password.length;j++){
                    if (passs.value===password[j]){
                        window.location.href="index.html"
                    }
                    else {
                        alert("Wrong Password");
                    }
                }
            }
            else{
                alert("Wrong Mail");
            }
        }
        console.log(username);
    });
    
  };









