$(document).ready(function() {

    var i = 0;
    $(".marqueeElement").each(function() {
          var $this = $(this);
          $this.css("top", i);
          i += 600;
          doScroll($this);
    });

    var i = 0;
    $(".marqueeElement2").each(function() {
          var $this = $(this);
          $this.css("top", i);
          i += 360;
          doScroll($this);
    });

    var i = 0;
    $(".marqueeElement3").each(function() {
          var $this = $(this);
          $this.css("top", i);
          i += 600;
          doScroll($this);
    });

    var i = 0;
    $(".marqueeElement4").each(function() {
          var $this = $(this);
          $this.css("top", i);
          i += 360;
          doScroll($this);
    });

     var i = 0;
    $(".marqueeElement5").each(function() {
          var $this = $(this);
          $this.css("top", i);
          i += 960;
          doScroll($this);
    });

    var i = 0;
    $(".marqueeElement6").each(function() {
          var $this = $(this);
          $this.css("top", i);
          i += 300;
          doScroll($this);
    });

    $('#clickme').click(function(){
      var imageArray = ['tv-static-1.gif','tv-static-2.gif','tv-static-3.gif', 'tv-static-4.gif', 'tv-static-5.gif'];
      var randNum = Math.floor(Math.random() * 5);
      $('.image-wrapper').html('<img id="static-1" class="tv-static-1" src="images/'+ imageArray[randNum] +'">');
    });

    $('#clickme2').click(function(){
      var imageArray = ['test-1.gif','test-2.gif','test-3.gif'];
      var randNum = Math.floor(Math.random() * 3);
      $('.image-wrapper').html('<img id="test-1" class="background-static" src="images/'+ imageArray[randNum] +'">');
    });

    $('#drag-1, #drag-2, #drag-3, #drag-4, #drag-5, #drag-6, #drag-7').draggable(function(){
     });

  });

// FOR POSTER 2 TURBO

    Mousetrap.bind('space', function() { 
      console.log('spacebar clicked');
      if($('#turbo1').hasClass('turbo1') && $('#turbo2').hasClass('turbo2') && $('#turbo3').hasClass('turbo3') && $('#turbo4').hasClass('turbo4') && $('#turbo5').hasClass('turbo5') && $('#turbo6').hasClass('turbo6')){
        $('#turbo1').removeClass('turbo1');
        $('#turbo1').addClass('turbo1-fast');
        $('#turbo2').removeClass('turbo2');
        $('#turbo2').addClass('turbo2-fast');
        $('#turbo3').removeClass('turbo3');
        $('#turbo3').addClass('turbo3-fast');
        $('#turbo4').removeClass('turbo4');
        $('#turbo4').addClass('turbo4-fast');
        $('#turbo5').removeClass('turbo5');
        $('#turbo5').addClass('turbo5-fast');
        $('#turbo6').removeClass('turbo6');
        $('#turbo6').addClass('turbo6-fast')
      }else{
        $('#turbo1').addClass('turbo1');
        $('#turbo1').removeClass('turbo1-fast');
        $('#turbo2').addClass('turbo2');
        $('#turbo2').removeClass('turbo2-fast');
        $('#turbo3').addClass('turbo3');
        $('#turbo3').removeClass('turbo3-fast');
        $('#turbo4').addClass('turbo4');
        $('#turbo4').removeClass('turbo4-fast');
        $('#turbo5').addClass('turbo5');
        $('#turbo5').removeClass('turbo5-fast');
        $('#turbo6').addClass('turbo6');
        $('#turbo6').removeClass('turbo6-fast');
      }
    });

// FOR POSTER 2 TURBO

    function doScroll($ele) {
        var top = parseInt($ele.css("top"));
        if(top < -50) {
            top = 180;
            $ele.css("top", top);
        }
        $ele.animate({ top: (parseInt(top)-60) },600,'linear', function() {doScroll($(this))

        });
    }
