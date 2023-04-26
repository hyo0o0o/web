$('.nav ul li').mouseover(function(){
    $(this).find('.submenu').slideDown();
});

$('.nav ul li').mouseleave(function(){
    $(this).find('.submenu').stop().slideUp();
});

//slide
$('#imgsbar li a').click(function(e){e.preventDefault();
    //a.attr(b)==> b속성값을 가져와라 라는 뜻
    //a.attr('img-left') ==> -4000px이라는 값이 반환됨
    //a.attr(b,c) ==> b가 가진 속성값을 c로 바꿔라
    var imgLeft=$(this).attr('img-left')
    console.log(imgLeft)
    //$('#imgs').animate({실행문},시간)
    $('#imgs').animate({left:imgLeft},500)
});

// 모달창
$('.partner_info').click(function(){
    // $('.modal').show();
    $('.modal').fadeIn();
});

$('.modal .close').click(function(){
   // $('.modal').hide();
   $('.modal').fadeOut();
})

//window
$('.contect').click(function(){
    window.open("contect.html", "child", "width=500,height=300,left=200, top=300");
})