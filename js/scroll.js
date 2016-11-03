/**
 * Created by hxsd on 2016/10/9.
 */
$(function(){
    $(".scroll").click(function(event){
        event.preventDefault();
        $('html,body').animate({scrollTop:-$(this).offset().top},1000);
    });
});

