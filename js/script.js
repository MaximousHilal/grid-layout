$('.navbar-open').on('click', function () {
    $('.nav-bar').animate({
        width: '100%'
    }, 500);
});

$('.navbar-close').on('click', function () {
    $(this).parent().animate({
        width: '0'
    }, 500);
});

$('.read').on('click', function () {
    $(this).parent().siblings('.read-more-content').fadeIn(500);
});

$('.close').on('click', function () {
    $(this).parent().fadeOut(500);
});

$('.dot').each(function (i, item) {
    let bgi = ['image/header-00', 'image/header-01', 'image/header-02', 'image/header-03', 'image/header-04'];
    $(item).on('click', function (event) {
        $('header').css({
            backgroundImage: `url(${bgi[i]}.jpeg)`
        })
        $(this).addClass('selected').siblings().removeClass('selected')
    })
})

let close = false;
$('.search button').click(function () {
    $(this).prev().fadeToggle();
    close = !close;
    console.log(close)
    if (close) {
        $(this).html('<i class="fas fa-times"></i>')
    } else {
        $(this).html('<i class="fas fa-search"></i>')
    }

})

$(document).ready(function () {
    //    let i = 0;
    //    setInterval(function (){
    //        document.querySelectorAll('.dot')[i].click();
    //        i = (i+1) ? i < $('.dot').length: 0
    //    }, 1000)
})
