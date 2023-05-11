function validate()
{
var username=document.getElementById("username").value;
var password=document.getElementById("password").value;
if(username=="admin"&& password=="user")
{
    alert("signup successfull");
    window.open("index.html");
    return false;

}
else
{
    alert("signup failed");
}


}