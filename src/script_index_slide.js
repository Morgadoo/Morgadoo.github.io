$(document).ready(function(){
    $("#home_slideshow img:eq(0)").addClass("ativo").show();
})



var timer = new Timer(function (){
    
if($(".ativo").next() && $(".ativo").next().length != 0){
    $(".ativo").fadeOut().removeClass("ativo").next().fadeIn().addClass("ativo");
    }else {
       $(".ativo").fadeOut().removeClass("ativo");
        $("#home_slideshow img:eq(0)").fadeIn().addClass("ativo");
  };


},4000);

//seta direita
$(document).ready(function(){
    $("#setaD").click(function(){

      timer.reset(6000);
  if($(".ativo").next() && $(".ativo").next().length != 0){
    $(".ativo").fadeOut().removeClass("ativo").next().fadeIn().addClass("ativo");
    }else {
       $(".ativo").fadeOut().removeClass("ativo");
        $("#home_slideshow img:eq(0)").fadeIn().addClass("ativo");
  };
}); 
})
//seta esquerda
$(document).ready(function(){
  $("#setaE").click(function(){
      timer.reset(6000);
    if($(".ativo").prev() && $(".ativo").prev().length != 0){

      $(".ativo").fadeOut().removeClass("ativo").prev().fadeIn().addClass("ativo");

    }else {

       $(".ativo").fadeOut().removeClass("ativo");
        $("#home_slideshow img:eq(4)").fadeIn().addClass("ativo");
  
  };
    

    }); 
})

function Timer(fn, t) {
    var timerObj = setInterval(fn, t);

    this.stop = function() {
        if (timerObj) {
            clearInterval(timerObj);
            timerObj = null;
        }
        return this;
    }

    // start timer using current settings (if it's not already running)
    this.start = function() {
        if (!timerObj) {
            this.stop();
            timerObj = setInterval(fn, t);
        }
        return this;
    }

    // start with new interval, stop current interval
    this.reset = function(newT) {
        t = newT;
        return this.stop().start();
    }
}
var angle1 = 0;
$(document).ready(function(){
  $(".hometext").click(function(){

  		$("#setaD").fadeToggle(200);
  		$("#setaE").fadeToggle(200);
  		$("#home_slideshow").slideToggle(600);
  		$("#home_text").fadeToggle(1000);
  		angle1 += 180;
  		$("#setaB").css({"transform":"rotate("+angle1+"deg)","transition": "0.5s"});
  		
  
  })


});

