import './styles/cookie.css';

class Cookie {
    constructor(container) {
        this.container = container;
        this.cookies = container.querySelector('.cookies');
        this.settings = container.querySelector('.cookies-settings');
        this.btnAccept = container.querySelector('.accept');
        this.btnUpdate = container.querySelector('.update');
        this.setBtns = container.querySelectorAll('.btn-cok');
        this.inputs = container.querySelectorAll('.toggle-container input');
    }
    init() {
        this.btnAccept.addEventListener('click', () => {
            this.cookies.classList.remove('active');
        });
        this.btnUpdate.addEventListener('click', () => {
            this.settings.classList.add('active');
            this.cookies.classList.remove('active');
        });
        this.setBtns.forEach((btn) => {
            btn.addEventListener('click', (e) => {
                if (e.target.dataset.target === 'all') {
                    this.inputs.forEach((input) => {
                        input.checked = true;
                    });
                    setTimeout(() => {
                        this.settings.classList.remove('active');
                    }, 500);
                } else {
                    this.settings.classList.remove('active');
                }
            });
        });
    }
}

export { Cookie as default };