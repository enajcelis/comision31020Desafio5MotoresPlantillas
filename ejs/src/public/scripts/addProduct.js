let form = document.getElementById('addProductForm');

form.addEventListener('submit', (evt) => { 
	evt.preventDefault(); 
	let data = new FormData(form);
	let obj = {};
	data.forEach((value,key) => obj[key] = value); 
	
	fetch('/api/productos',{ 
		method: 'POST', 
		body: JSON.stringify(obj),
		headers: {
			"Content-Type": "application/json"
		} 
	})
	.then(response => response.json())
	.then(data => {
		location.reload();
	});
});