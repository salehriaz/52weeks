$(".link a").click(function () {
    //    alert("link clicked");
    var boolSelected = $(this).parent().hasClass("selected");

    if (!boolSelected) {
        $(".link").removeClass("selected");

        $(this).parent().addClass("selected");

        // change iframe url

        var weekNumber = $(this).attr("class");

        var iframeSrc = "weeks/" + weekNumber + "/" + weekNumber + ".html";

        $("iframe").attr("src", iframeSrc);

        console.log(iframeSrc);
    }

});

$(".special-link a").click(function () {
    $(".link").removeClass("selected");
});
