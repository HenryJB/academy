(function () {
    $(document).ready(function () {
        $("a#overlay-menu").onClick(function () {
            alert("welcome");
            $(".overlay").fadeToggle(200);
            $(this)
                .toggleClass("btn-open")
                .toggleClass("btn-close");
        });
    });
    $(".overlay").on("click", function () {
        $(".overlay").fadeToggle(200);
        $(".button a")
            .toggleClass("btn-open")
            .toggleClass("btn-close");
        open = false;
    });
})();


