var navElements = document.getElementsByClassName('nav-link'),

	tableBtn    = document.getElementById('table'),
	cardBtn     = document.getElementById('card');

for(let i = 0; i < navElements.length; i++) {
	navElements[i].onclick = function() {
		for(let i = 0; i < navElements.length; i++) {
			navElements[i].classList.remove('active');
		}
		this.classList.add('active');
	};
};

tableBtn.onclick = function() {

};

cardBtn.onclick = function() {

};

