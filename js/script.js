$(function(){
    $('html,body').animate({
        scrollTop:0
    },'1');
	setTimeout(function(){
		$('.loading').fadeOut(1320);
	},1320); 
    });
window.addEventListener("scroll", function(){
    let scroll =this.document.documentElement.scrollTop;

    if(scroll > 300){
        document.querySelector("header").classList.add("color");
    }else{
        this.document.querySelector("header").classList.remove("color");
    }
});
function fadeAnime(){
    $('.goal, .cp_card03').each(function(){ 
      var elemPos = $(this).offset().top-300;
      var scroll = $(window).scrollTop();
      var windowHeight = $(window).height();
      if (scroll >= elemPos - windowHeight){
      $(this).addClass('fadeUp');
      }else{
      $(this).removeClass('fadeUp');
      }
      });
      $('.tk, .dl-t, .r-plf-name, .r-plf-katagaki, .r-plf-area p, .box_con').each(function(){ 
        var elemPos = $(this).offset().top-50;
        var scroll = $(window).scrollTop();
        var windowHeight = $(window).height();
        if (scroll >= elemPos - windowHeight){
        $(this).addClass('filter');
        }else{
        $(this).removeClass('filter');
        }
        });
        $('.timeline-title, .timeline-text').each(function(){ 
            var elemPos = $(this).offset().top-50;
            var scroll = $(window).scrollTop();
            var windowHeight = $(window).height();
            if (scroll >= elemPos - windowHeight){
            $(this).addClass('slide-in');
            }else{
            $(this).removeClass('slide-in');
            }
            });
};
$(window).scroll(function (){
    fadeAnime();
  });


  $(window).on('load', function(){
    fadeAnime();
  });
    