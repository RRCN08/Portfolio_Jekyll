$(document).ready(function() {

  var audio = new Audio();
  var isPlaying = false;

  $('body').on('click', '.audiobtn', function(e) {
  e.preventDefault();

  if (isPlaying && $(this).hasClass('play')) {
   audio.pause();
   audio.currentTime = 0;
   isPlaying = false;
     $('.audiobtn').addClass('play').removeClass('pause');
  }


  if ( $(this).hasClass('play') ) {
  var audioID = $(this).attr('id');
  audio.src = "./src/audio/" + audioID + ".mp3";

  togglePlay();
  $(this).removeClass('play');
  $(this).addClass('pause');

  } else {
  togglePlay();
  $(this).removeClass('pause');
  $(this).addClass('play');
  }

  });

  $('#district').on('hidden.bs.modal', function(){

    $(audio).each(function(){
      this.pause();
      this.currentTime = 0;
    });

    $(".audiobtn").attr("style", "display: none;");
    $(".audiobtn").removeClass('pause');
    $(".audiobtn").addClass('play');

  });


  function togglePlay() {
  if (isPlaying) {
   audio.pause();
   audio.currentTime = 0;
  }
  else {
   audio.play();
  }
  };

  audio.onplaying = function() {
  isPlaying = true;
  };
  audio.onpause = function() {
  isPlaying = false;
  };

  audio.addEventListener("ended",  function() {
   isPlaying = false;
     $('.audiobtn').addClass('play').removeClass('pause');
   });


  });
