// 내비게이션 

$('.menu > li').mouseover(function(){
    $(this).children('.sub').stop().slideDown()
})

$('.menu > li').mouseout(function(){
    $(this).children('.sub').stop().slideUp()
})

// sub-back

$('.menu > li').mouseover(function(){
    $('.sub, .sub-back').stop().slideDown()
})

$('.menu > li').mouseout(function(){
    $('.sub, .sub-back').stop().slideUp()
})

// 공지사항 & 갤러리 
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

// 팝업창 
$('.op-pop').click(function(){
    $('.pop').fadeIn()
})

$('.op-pop').click(function(){
    $('.pop').fadeOut()
})