if (window.innerWidth <= 380) {
  $(".image img").attr("src", "./images/hero-mobile.jpg");
} else if (window.innerWidth > 500) {
  $(".image img").attr("src", "./images/hero-desktop.jpg");
}
