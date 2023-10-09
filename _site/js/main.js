$(document).ready(function() {

            $(function () {
            $(document).scroll(function () {
              var $nav = $(".navbar-fixed-top");
              var offsetHeight = document.getElementById('NavStart').offsetHeight+$nav.height();
              $nav.toggleClass('scrolled', $(this).scrollTop() > offsetHeight);
            });
            });

            //Venobox
            $('.venobox').venobox();
            $('.venobox_custom').venobox({
                bgcolor    : '#efefef',
                spinner    : 'cube-grid'
            });

            //Tooltop
            $(function () {
              $('[data-toggle="tooltip-resume"]').tooltip({
                placement: 'bottom'
              })
            })


            //Rellax Parallax Effect
            var rellax = new Rellax('.rellax');

            //View More
            $("#viewmore").click(function() {
                // assumes element with id='button'
                $(".hiddenproject").fadeToggle();
            });

            var pro = 0;

            //Easter Egg
            $('#prohit').click(function() {
              if (pro == 0) {
                  $('#Hero > h1 > #prohit').text("PROHIT RAMACHANDRAN");
                  pro = 1;
              } else {
                  $('#Hero > h1 > #prohit').text("ROHIT RAMACHANDRAN");
                  pro = 0;
              }
            });


            // Add smooth scrolling to all links
            $("#projects").click(function() {
                $('html,body').animate({
                    scrollTop: $("#Projects").offset().top},
                    'slow');
            });


            $('body').css('padding-top', $('.navbar').outerHeight() + 'px')

            //Scroll Progress Bar

            $(document).on("scroll", function() {
              var pixels = $(document).scrollTop()

              var dh = $(document).height()
              var wh = $(window).height()
              var diff = dh - wh
              var percentage = 100 * pixels / diff

            $("div.progress").css("width", percentage + "%")
            })

            //Modernizr

              Modernizr.on('webp', function (result) {
                if (result) {
                  // supported
                } else {
                  // not-supported
                }
              });

          });
