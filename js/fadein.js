$(function(){
    $(".inview").on("inview", function (event, isInView) {
      if (isInView) {
        $(this).stop().addClass("is-show");
      }else{
        $(this).stop().removeClass("is-show");
      }
    });
  });