var mn = $(".container-main");
mns = "main-nav-scrolled";

var BorderWidth = 35;

$(window).scroll(function() {
  if ($(this).scrollTop() > BorderWidth) {
    mn.addClass(mns);
  } else {
    mn.removeClass(mns);
  }
});
