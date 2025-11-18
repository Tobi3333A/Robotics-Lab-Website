$(".menu-toggle").click(function() {
    const ul = $("nav ul");
    const van = $("nav");
    if ((ul.css("display") === "none") | (van.css("display") === "none")) {
        ul.css("display", "block");
        van.css("display", "block");
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
