   $(document).ready(function() {
       $(window).scroll(function() {
           if (this.scrollY > 20) {
               $('.navbar').addClass("sticky");
           } else {
               $('.navbar').removeClass("sticky");
           }
           if (this.scroll > 500) {
               $('.scroll-up-btn').addclass("show");
           } else {
               $('.scroll-up-btn').removeclass("show");
           }
       });
       // scrooll
       $('.scroll-up-btn').click(function() {
           $('html').animate({ scrollTop: 0 });
       });


       //toggle
       $('.menu-btn').click(function() {
           $('.navbar .menu').toggleClass("active")
           $('.menu-btn i').toggleClass("active")
       });
       // typing
       var typed = new Typed(".typing", {
           strings: ["Web designer", "Developer", "Youtuber", "Blogger", "Freelencer"],
           typedSpeed: 100,
           backSpeed: 60,
           loop: true
       });
       // owl c
       $('.carousel').owlCarousel({
           margin: 20,
           lopp: true,
           autoplayTimeOut: 2000,
           autoplayHoverPause: true,
           responsive: {
               0: {
                   items: 1,
                   nav: false
               },
               600: {
                   items: 2,
                   nav: false
               },
               1000: {
                   items: 3,
                   nav: false
               }
           }
       });
   });