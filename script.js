$(".menu-toggle").click(function() {
    const ul = $("nav ul");
    if (ul.css("display") === "none") {
        ul.css("display", "block");
    } else {
        ul.css("display", "none");
    }
});
$(".menu-tog").click(function() {
    const ul = $("#sideBar");
    if (ul.css("display") === "none") {
        ul.css("display", "block");
    } else {
        ul.css("display", "none");
    }
});
