

$(function(){

    $(".menu a").on("click", function (e) {
		e.preventDefault();
		var id  = $(this).attr('href'),
			top = $(id).offset().top;
		$('body,html').animate({scrollTop: top}, 1000);
	});



    var mixer = mixitup('.portfolio_content');

    $('.slider-blog_inner').slick({
        dots:true,
        prevArrow:'<button type="button" class="slick-prev"><img src="images/arrow-left.svg" alt=""></button>',
        nextArrow:'<button type="button" class="slick-next"><img src="images/arrow-right.svg" alt=""></button>'
    });
});