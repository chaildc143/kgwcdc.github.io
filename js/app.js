$(window).scroll(function(){
	$('nav').toggleClass('scrolled', $(this).scrollTop() > 50);
	});
	
	$(function () {
             $('a[href*=#]:not([href=#h1])').click(function () {
                 var target = $(this.hash);
                 target = target.length ? target : $('[name=' + this.hash.substr(1) + ']');
                 if (target.length) {
                     $('html,body').animate({
                         scrollTop: target.offset().top
                     }, 1000);
                     return false;
                 }
             });
    });




    // ===== Scroll to Top ==== 


// audio player

