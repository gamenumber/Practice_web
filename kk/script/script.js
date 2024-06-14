// 네비게이션

$('.menu > li').mouseover(function(){
    $('.sub, .sub-back').stop().slideDown()
})
$('.menu > li').mouseout(function(){
    $('.sub, .sub-back').stop().slideUp()
})

// 팝업 

$('.op-pop').click(function(){
    $('.pop').fadeIn()
})
$('.cl-pop').click(function(){
    $('.pop').fadeOut()
})