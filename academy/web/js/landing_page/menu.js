(function () {
<<<<<<< HEAD
    /* Open */
    function openNav() {
        $("#myNav").style.height = "100%";
    }

    /* Close */
    function closeNav() {
        $("#myNav").style.height = "0%";
    }
=======
    $(document).ready(function () {
        $("a#overlay-menu").on('click',function () {
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
>>>>>>> e016ecb9c3d9bdd8e623c96440be9a414f26af86
})();


