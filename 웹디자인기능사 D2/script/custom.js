$('.menu li').mouseenter(function(){
    $(this).children('.sub').stop().slideDown()
})

$('.menu li').mouseleave(function(){
    $(this).children('.sub').stop().slideUp()
})

$('.open-modal').click(function(){
    $('.modal').fadeIn()
})
$('.close-modal').click(function(){
    $('.modal').fadeOut()
})