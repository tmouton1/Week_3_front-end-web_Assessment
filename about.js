console.log("hello world");



function handleSubmit(evt) {
	evt.preventDefault();
	
	console.log('form submit');
}


let form = document.querySelector('#contact');

form.addEventListener('submit', handleSubmit);

function handleSubmit() {
	alert("Your form has been submitted successfully. Thank you!");
}


function somefunction()
{
  alert("You're lit!")
}