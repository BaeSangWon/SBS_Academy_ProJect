$('.box1 button').click(function(){
    $('.box1 p').animate({
        marginLeft: 300,
        marginTop: 300,
        width:400
    }, 2000, function(){
        $(this).css({
            backgroundColor: "red"
        })
    })
})