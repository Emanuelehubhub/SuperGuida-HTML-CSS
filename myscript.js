
//Tendina

$(function(){

    $(".btn").click(function(){
        $(".tendina").slideToggle("slow");
      });  
  });


  //Tornare in top

  $(function() {
	$(window).scroll(function() {
		if($(this).scrollTop() != 0) {
                        //se non siamo in cima alla pagina
			$('#top').fadeIn(); //faccio apparire il box	
		} else {
                        //altrimenti (il visitatore è in cima alla pagina scrollTop = 0)
			$('#top').fadeOut();//Il box scompare
		}
	});//Allo scroll function

	$('#foot__btn').click(function() {
                //Se clicco sul box torno su (scrollTop:0) con un timing di animazione.
		$('body,html').animate({scrollTop:0},800);
	});//Click

});//DOM


//scrollreveal

ScrollReveal().reveal('.reveal', { distance: '100px', duration: 1800,  easing: 'cubic-bezier(.212, .61, .355, 1)', interval: 100,  mobile: false  });


//animation
$(document).ready(function(){
	setTimeout(function(){ 
	$("#mioNome").addClass("animate__animated animate__pulse");
		}, 5000);
  });




  //hamburger

  $(document).ready(function(){
	$(".hamburger").on('click', function(){
	  $(".navbar").toggleClass("navbar--open");
	
  });
  $(".chiudi").on('click', function(){
	$(".navbar").removeClass("navbar--open");
  
});

});
