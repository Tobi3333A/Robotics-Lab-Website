$(".menu-tog").click(function() {
    const ul = $("#sideBar");
    if (ul.css("display") === "none") {
        ul.css("display", "block");
    } else {
        ul.css("display", "none");
    }
});
