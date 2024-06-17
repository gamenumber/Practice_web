// 세로 네비
$('.menu > li').mouseover(function(){
    $(this).children('.sub').stop().slideDown()
})
$('.menu > li').mouseout(function(){
    $(this).children('.sub').stop().slideUp()
})

// 팝업
$('.op-pop').click(function(){
    $('.pop').fadeIn()
})
$('.cl-pop').click(function(){
    $('.pop').fadeOut()
})