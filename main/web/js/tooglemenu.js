(function () {
    $(".menu-bar").on("click", function(e) {
      e.preventDefault();
      $("#menu-content").toggleClass("hidden");
      $("span", this).toggleClass("fa-bars fa-remove");
      $(".main-menu").addClass("mobile-menu");
    });
})();
