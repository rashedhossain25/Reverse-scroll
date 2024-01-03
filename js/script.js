
//jq code

$(document).ready(function(){

  $(window).on('scroll',function(){
    $(".container-2").css('bottom',$(window).scrollTop()*-1);
  });

});