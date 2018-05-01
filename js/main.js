var navElements  = document.getElementsByClassName('nav-link'),

	tableBtn     = document.getElementById('table'),
	cardBtn      = document.getElementById('card'),
	sectionItems = document.getElementsByTagName('section'),

	mmBtn 		 = document.getElementById('mm-btn'),
	mMenu 		 = document.querySelector('ul.mobile-menu');

for(let i = 0; i < navElements.length; i++) {
	navElements[i].onclick = function() {
		for(let i = 0; i < navElements.length; i++) {
			navElements[i].classList.remove('active');
		}
		this.classList.add('active');
	};
};
tableBtn.onclick = function() {
	sectionItems[0].classList.add('tableView');
};

cardBtn.onclick = function() {
	sectionItems[0].classList.remove('tableView');
};

mmBtn.onclick = function() {
	if(mMenu.classList.contains('opened')) {
		mMenu.classList.remove('opened');
	}else{
		mMenu.classList.add('opened');
	}
};

