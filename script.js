//your JS code here. If required.
const firstName=document.getElementById("firstName");
const lastName=document.getElementById("lastName");
const phoneNumber=document.getElementById("phoneNumber");
const emailId=document.getElementById("emailId");
const submit=document.getElementById("submitBtn")
submit.addEventListener("click",func)
function func(){
	event.preventDefault()
	alert("First Name: "+firstName.value+" "+"Last Name: "+lastName.value+" Phone Number: "+phoneNumber.value+" Email Id: "+emailId.value)
}
