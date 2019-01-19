
    var stickyOffset = $(".blog-menu").offset().top;
    $(window).scroll(function() {
      var sticky = $(".blog-menu"),
        scroll = $(window).scrollTop();
      if (scroll >= stickyOffset) sticky.addClass("sticky");
      else sticky.removeClass("sticky");
    });
    $(".search-form").on("click", function() {
      $(".text").toggle("show");
      $(this).toggleClass("red");
    });
 