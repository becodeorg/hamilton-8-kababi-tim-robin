let burger = document.getElementById("burger");
let menu = document.getElementById("menu");

burger.addEventListener('click', function() {
	if (menu.classList.contains("display")) {
		menu.classList.remove("display")
	} else {
		menu.classList.add("display")
	}
	
});