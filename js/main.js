
let menuItem = $(".bottom-menu__item");

menuItem.click(function() {
    menuItem.removeClass("active");
    $(this).addClass("active");
    let option = $(this).attr("option");
    $(".selected").removeClass("selected");
    console.log($(this));
    $("."+option+"-wrapper").addClass("selected");

});

