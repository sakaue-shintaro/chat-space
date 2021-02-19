$(".side-ber__groups__group__name").on('click', function(){
  $(".wrapper-overflow").removeClass("wrapper-overflow")
  $("body").animate({scrollLeft: $("body").scrollLeft()+100,},300)
})