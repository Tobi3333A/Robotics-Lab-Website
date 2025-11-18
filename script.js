$(".menu-toggle").click(function() {
    const van = $("nav");
    if (van.css("display") === "none") {
        van.css("display", "block");
    } else {
        van.css("display", "none");
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
