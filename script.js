var css = document.querySelector('h3');
var color1 = document.querySelector('.color1');
var color2 = document.querySelector('.color2');
var body = document.getElementById('gradient');
var rans = document.getElementsByClassName('randombutton')[0];

 function setGradient() {
	body.style.background = 
		"linear-gradient(to right,"
		+ color1.value
		+ ", "
		+ color2.value
		+ ")";
	css.textContent = body.style.background;
}

function randoms() {
	characters = '0123456789abcdef'
	charlen = characters.length;
	return characters.charAt(Math.floor(Math.random() * charlen)); 
}

rans.addEventListener('click', function() {
	color1.value = "#"
		+ randoms()	+ randoms()	+ randoms()
		+ randoms()	+ randoms()	+ randoms();

	color2.value = "#"
		+ randoms()	+ randoms()	+ randoms()
		+ randoms()	+ randoms()	+ randoms();

		setGradient();
		
	console.log(color1.value, color2.value);

})

color1.addEventListener('input', setGradient);

color2.addEventListener('input', setGradient);

window.addEventListener('load', (event) => setGradient());

