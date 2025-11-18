$(".menu-tog").click(function() {
    const man = $("main");
    const ul = $("#sideBar");
    if ((ul.css("display") === "none") | (man.css("height") !== "calc(100vh - 74px)")) {
        man.css("height", "calc(100vh - 74px)");
        ul.css("display", "block");
    } else {
        ul.css("display", "none");
        man.css("height", "auto");
    }
});
