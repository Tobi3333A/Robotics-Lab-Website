$(".menu-tog").click(function() {
    const man = $("main");
    const ul = $("#sideBar");
    if ((ul.css("display") === "none") | (man.css("height") !== "0px")) {
        man.css("height", "0px");
        ul.css("display", "block");
    } else {
        ul.css("display", "none");
        man.css("height", "auto");
    }
});
