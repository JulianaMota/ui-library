import './main.css';
import Tooltip from './ui/tooltip';
import Dropdown from './ui/dropdown';
import Tabs from './ui/tabs';
import Snackbar from './ui/snackbar';
import Cookie from './ui/cookie';
import Loader from './ui/loader';

//create a tooltip
const tooltip = new Tooltip(document.querySelector('.tooltip'));
tooltip.init();

//create dropdown
const dropdowns = document.querySelectorAll('.dropdown');

dropdowns.forEach((dropdown) => {
	const instance = new Dropdown(dropdown);
	instance.init();
});

//create tabs
const tabs = new Tabs(document.querySelector('.tabs'));
tabs.init();

//create snackbar
const snackbar = new Snackbar();
snackbar.init();
const button = document.querySelector('button');
button.addEventListener('click', () => {
	snackbar.show('you clicked me =)');
});

//crete cookies
const cookie = new Cookie(document.querySelector('#cookies'));
cookie.init();

//loader
const loader = new Loader(document.querySelector('.loader'));
loader.init();
