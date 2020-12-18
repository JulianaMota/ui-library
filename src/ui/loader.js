import './styles/loader.css';

class Loader {
	constructor() {
		this.loader = document.querySelectorAll('.loader div');
	}
	init() {
		for (let i = 0; i < this.loader.length; i++) {
			this.loader[i].classList.add('animation');
		}
	}
}

export { Loader as default };
