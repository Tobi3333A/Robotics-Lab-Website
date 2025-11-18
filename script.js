$(".menu-tog").click(function() {
    const ul = $("#sideBar");
    if ((ul.css("display") === "none") | (ul.css("height") !== "100vh")) {
        ul.css("height", "100vh");
        ul.css("display", "block");
    } else {
        ul.css("display", "none");
        ul.css("height", "auto");
    }
});
