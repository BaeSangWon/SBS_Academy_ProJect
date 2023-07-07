$('.drop_menu_1 li').click(function(){
    let i = $(this).index()
    
    
    $('.drop_menus').eq(i).css('display' , 'block')
    // $('.drop_menus').removeClass('drop_menus')
})