var wrap = $(".page-content");

wrap.on("scroll", function(e) {
    
  if (this.scrollTop > 147) {
    wrap.addClass("sticky");
  } else {
    wrap.removeClass("sticky");
  }
  
});