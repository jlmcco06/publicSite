  $(document).ready(function($) {
  	window.scrollTo(0,document.body.scrollHeight);
    $('.navigation').find('.nav-button').click(function(){
    	var button = this.title;
    	$('#' + button).slideToggle('slow');
    	$('html, footer').animate({
    		scrollTop: $(".footer").offset().top
		}, 1000);
    });
  });