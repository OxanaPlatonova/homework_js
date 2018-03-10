var login = document.getElementById('login').getAttribute('value');
var control = (/^[a-zA-Z]+\W?[a-z]+@(mail\.{1}ru|gmail\.{1}com|yandex\.ru|ukr\.net|rambler\.{1}ru|gmail\.{1}ru|email\.{1}ua)$/).test(login);
function signIn(){
	if(control === false){
		let error = document.querySelector('div.error');
		error.style.display="block";
	}
}
