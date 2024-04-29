var $ = jQuery;
$(document).ready(function(){
   
    $('body').on('click', "a.side-bar-open" , function(e){
        e.preventDefault();
        $('.dashboard-sidebar').toggleClass('active');
        $('.dashboard-inner > .row > .col-md-3').toggleClass('active');
    })
    $('body').on('click', "a.messages-side-bar-open" , function(e){
        e.preventDefault();
        $('.messages-section .col-md-4').toggleClass('active');
        $('.messages-section .users-message-list').toggleClass('active');
    })
    
    $('#toggle-cat-dog').find('input[type="radio"]').change(function(){
        var $this = $(this);
        if($this.val() == 'cat'){
            $('#options-for-cat-search').show();
            $('#options-for-dog-search').hide();
        }else if($this.val() == 'dog'){
            $('#options-for-dog-search').show();
            $('#options-for-cat-search').hide();
        }else{
            $('#options-for-dog-search').show();
            $('#options-for-cat-search').hide();
        }
        return false;
    });
    $('#trigger-menu-sidebar').on('click' , function(){
        $('#the-main-menu').slideToggle()
        $(this).toggleClass('active');
        return false;
    });
    // $('body').on('click', ".dash-menu-item" , function(e){
    //     e.preventDefault();
    //     var id 	=	$(this).data('tab');
    //     $('.tab[data-tab='+id+']').addClass('active').siblings().removeClass('active');
    //     $(this).addClass('active').siblings().removeClass('active');

    // });
    $('body').on('click', ".list-filter" , function(e){
        e.preventDefault();
        $('.sitter-tabs').addClass('active');
        $(this).addClass('active').siblings().removeClass('active');

    });
    $('body').on('click', ".tab-filter" , function(e){
        e.preventDefault();
        $('.sitter-tabs').removeClass('active');
        $(this).addClass('active').siblings().removeClass('active');

    });
    
    $('.js-example-basic-single').select2();
    
    
    
})