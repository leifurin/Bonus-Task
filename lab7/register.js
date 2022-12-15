function checkOut(){
	console.log(localStorage.getItem('name'))
	console.log(localStorage.getItem('lastname'))
	console.log(localStorage.getItem('password'))
	console.log(localStorage.getItem('email'))
	console.log(localStorage.getItem('bday'))
	console.log(localStorage.getItem('file'))
	console.log(localStorage.getItem('time'))
	console.log(localStorage.getItem('cars'))
	console.log(localStorage.getItem('color'))
	console.log(localStorage.getItem('w3review'))
	
	 
	}
	function onSubmit(event){
	
	let name = document.getElementById('name').value
	let lastname = document.getElementById('lastname').value
	let password = document.getElementById('password').value
	let email = document.getElementById('email').value 
	let bday = document.getElementById('bday').value
	let file = document.getElementById('file').value
	let time = document.getElementById('time').value
	let cars = document.getElementById('cars').value
	let country = document.getElementById('country').value
	let color = document.getElementById('color').value
	let w3review = document.getElementById('w3review').value
	
	
	console.log(name)
	console.log(lastname)
	console.log(password)
	console.log(email)
	console.log(bday)
	console.log(file)
	console.log(time)
	console.log(cars)
	console.log(country)
	console.log(color)
	console.log(w3review)
	
	
	let dannye = event.target;
	let formdata = new FormData(dannye)
	let form_data_obj = Object.fromEntries(formdata)
	
	console.log(form_data_obj);
	
	localStorage.setItem('name', form_data_obj.name),
	localStorage.setItem('lastname',form_data_obj.lastname),
	localStorage.setItem('password',form_data_obj.password),
	localStorage.setItem('email',form_data_obj.email)
	localStorage.setItem('bday',form_data_obj.bday)
	localStorage.setItem('file',form_data_obj.file)
	localStorage.setItem('time',form_data_obj.time)
	localStorage.setItem('cars  ',form_data_obj.cars)
	localStorage.setItem('country',form_data_obj.country)
	localStorage.setItem('color',form_data_obj.color)
	localStorage.setItem('w3review',form_data_obj.w3review)
	
	event.preventDefault();
	}
	
	