// // MENÚ // //
(function menu() {
	var lastScrollTop = 0;
	window.addEventListener("scroll", function() {
		var currentScroll = window.pageYOffset || document.body.scrollTop;
		if (currentScroll > lastScrollTop) {
			document.getElementById("nav").classList.add("bg-menu");
		} else {
			document.getElementById("nav").classList.add("bg-menu");
			if ( currentScroll <= 2 ) {
				document.getElementById("nav").classList.remove("bg-menu");
			}
		}
		lastScrollTop = currentScroll;
	}, false);
})();
(function menuResponsive() {
	var btnMenu = document.getElementById('btn-menu');
	var list = document.getElementById('list-menu');
	btnMenu.addEventListener("click", function(event){
		event.preventDefault();
		list.classList.toggle('hidden-xs');
	})	
})();

$(document).ready(function() {
  $('#people').carousel({
    pause: true,
    interval: false,
  });
});
$(document).ready(function() {
  $('#menu').carousel({
    pause: true,
    interval: false,
  });
});
