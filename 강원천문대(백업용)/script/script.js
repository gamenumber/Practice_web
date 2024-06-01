$('.menu > li').mouseover(function(){
    $(this).children('.sub').stop().slideDown()
})
$('.menu > li').mouseout(function(){
    $(this).children('.sub').stop().slideUp()
})


$('.btn > a:first-child').click(function(){
    $('.tab1').show()
    $('.tab2').hide()
    $(this).addClass('act')
    $(this).siblings().removeClass('act')
})
$('.btn > a:last-child').click(function(){
    $('.tab2').show()
    $('.tab1').hide()
    $(this).addClass('act')
    $(this).siblings().removeClass('act')
})

// 오픈 팝을 클릭하면
// 팝업이 fadIn

$('.open-pop').click(function(){
    $('.popup').fadeIn()
})
$('.close-pop').click(function(){
    $('.popup').fadeOut()
})