

function passvalues()
{
var name=document.getElementById("name").value;
var email=document.getElementById("email").value;
var address=document.getElementById("address").value;


localStorage.setItem("name",name);
localStorage.setItem("email",email);
localStorage.setItem("address",address);
return;
}
