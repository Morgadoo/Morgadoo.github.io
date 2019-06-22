     

//load page animate

$(function() {
  
  $(".home").animate({opacity: '1'},1000);
  $(".historiadiv").animate({opacity: '1'},1000);
  $(".contactosdiv").animate({opacity: '1'},1000);
  $(".galeriadiv").animate({opacity: '1'},1000);
  $(".livediv").animate({opacity: '1'},1000);
  $(".rededemuseusdiv").animate({opacity: '1'},1000);
  
});


$(document).ready(function(){
  $("#_museus").click(
    function(){$("#subbar").slideToggle("slow");}
    );


});
$(document).ready(function(){
  $("#_live").click(function(){
    $("#subbar").slideUp("slow");
  });
});
$(document).ready(function(){
  $("#_contactos").click(function(){
    $("#subbar").slideUp("slow");
  });
});
$(document).ready(function(){
  $("#_galeria").click(function(){
    $("#subbar").slideUp("slow");
  });
});
$(document).ready(function(){
  $("#_historia").click(function(){
    $("#subbar").slideUp("slow");
  });
});


//icon
$(document).ready(function(){
  $("#icon").on('click', function () {
    $('.icon_sub1').animate({
  height: "toggle",
  opacity: "toggle"
    });
  });
});



