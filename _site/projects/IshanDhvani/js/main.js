var BrahmaT = 1;

function BrahmaToggle() {
  // Get the checkbox
  var checkBox = document.getElementById("brahma");

  // If the checkbox is checked, display the output text
  if (checkBox.checked == true){
      BrahmaT = 1;
      $('.st11').fadeIn('slow', function(){
      $('.st11').attr("style", "display: inline-block;"); });
  } else {
    BrahmaT = 0;
    $('.st11').fadeOut('slow', function(){
    $('.st11').attr("style", "display: none;"); });
  }
}


$(document).ready(function() {

      $('.navbar-toggler-icon').on('click',function(){

        if ( $(".navbar-collapse").hasClass( "show" ) )
        {$('.navbar-brand').fadeIn(1000);}

        else
        {$('.navbar-brand').fadeOut(100);}

      });

      $('#start').on('click',function(){
        $('#intro').fadeOut('slow', function(){
        $('#intro').attr("style", "display: none;");
        $('.assam').fadeIn('slow');
        $('.recordings').fadeIn('slow');
        $("#head1").text("Welcome");
        $("#desc1").html("We have compiled audio recordings from 60 people across Assam, from west to east, in a search of the different dialects of the Assamese language. To start listening to recordings of various speakers, click on a district.");
        });
      });

      $('#info').on('click',function(){
        $('.main').fadeOut('slow', function(){
        $('.assam').fadeOut('slow');
        });
        $('#intro').delay(600).fadeIn('slow');
        $("#recordingsbtn").addClass("active");
        $("#lexicalsbtn").removeClass("active");
        $("#varietiesbtn").removeClass("active");

        $('.btn').removeClass("btn-outlineg");
        $('.btn').removeClass("btn-outlineb");
        $('.btn').addClass("btn-outliner");
      });

      $('#varietiesbtn').on('click',function(){
        if ( $("#recordingsbtn").hasClass( "active" ) ) {
          $('.recordings').fadeOut('slow', function(){
          $('.varieties').fadeIn('slow');
          $("#recordingsbtn").removeClass("active");
          });
        }

        else {
          $('.lexicals').fadeOut('slow', function(){
          $('.varieties').fadeIn('slow');
          $("#lexicalsbtn").removeClass("active");
          });
        }

        $(this).addClass("active");
        $('.btn').removeClass("btn-outliner");
        $('.btn').removeClass("btn-outlineg");
        $('.btn').addClass("btn-outlineb");

        $("#head1").fadeOut(function() {
          $(this).text("Dialect Map");
          }).fadeIn();

        $("#desc1").fadeOut(function() {
          $(this).html("Although Assamese can be divided mainly into 3 kinds - Western, Eastern, and Central, our respondents have identified as much as 10 different varieties. We also asked them how proud they are of their language. Hover on a region to see what we found.");
          }).fadeIn();

      });

      $('#recordingsbtn').on('click',function(){
        if ( $("#varietiesbtn").hasClass( "active" ) ) {
          $('.varieties').fadeOut('slow', function(){
          $('.recordings').fadeIn('slow');
          $("#varietiesbtn").removeClass("active");
          });
        }

        else {
          $('.lexicals').fadeOut('slow', function(){
          $('.recordings').fadeIn('slow');
          $("#lexicalsbtn").removeClass("active");
          });
        }

        $(this).addClass("active");
        $('.btn').removeClass("btn-outlineg");
        $('.btn').removeClass("btn-outlineb");
        $('.btn').addClass("btn-outliner");

        $("#head1").fadeOut(function() {
          $(this).html("Welcome<br>");
          }).fadeIn();

        $("#desc1").fadeOut(function() {
          $(this).html("We have compiled audio recordings from 60 people across Assam, from west to east, in a search of the different dialects of the Assamese language.  To start listening to recordings of various speakers, click on a district.</p>");
          }).fadeIn();
      });

      $('#lexicalsbtn').on('click',function(){

        if ( $("#varietiesbtn").hasClass( "active" )) {
          $('.varieties').fadeOut('slow', function(){
          $('.lexicals').fadeIn('slow');
          $("#varietiesbtn").removeClass("active");
          });
        }

        else {
          $('.recordings').fadeOut('slow', function(){
          $('.lexicals').fadeIn('slow');
          $("#recordingsbtn").removeClass("active");
          });
        }

        $(this).addClass("active");
        $('.btn').removeClass("btn-outliner");
        $('.btn').removeClass("btn-outlineb");
        $('.btn').addClass("btn-outlineg");

        $("#head1").fadeOut(function() {
          $(this).html("Word Distribution<br>");
          }).fadeIn();

        $("#desc1").fadeOut(function() {
          $(this).html("Every language has synonyms, but there usually is one term which is used more in comparison to others. To find out this variation of usage of words across the state, native terms for 12 items were elicited from the speakers.  To see the distribution, click on a term below.");
          }).fadeIn();
      });


      $('#gear').popover({
        title: 'Settings',
        container: 'body',
        content: function() {

          var $el = $('<div id="#settings">Show Brahmaputra &nbsp; &nbsp;</div>');

          if(BrahmaT == 0){
            $el.append('<label class="switch">' + '<input type="checkbox" id="brahma" name="BrahmaTT" onclick="BrahmaToggle()" >' + '<span>' + '</span>' + '</label>'); }

            else {
              $el.append('<label class="switch">' + '<input type="checkbox" id="brahma" name="BrahmaTT" onclick="BrahmaToggle()" checked>' + '<span>' + '</span>' + '</label>');

            }


          return $el;
        },
        placement: 'top',
        html: true
      });


  });
