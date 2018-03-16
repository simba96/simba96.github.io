$(function() {

    var newSelection = "";

    $("#filter-nav h2").click(function(){

        $("#filter-item").fadeTo(200, 0.10);

        $("#flavor-nav h2").removeClass("current");
        $(this).addClass("current");

        newSelection = $(this).attr("rel");

        $(".all_item").not("."+newSelection).slideUp();
        $("."+newSelection).slideDown();

        $("#filter-item").fadeTo(300, 1);

    });

});
$(function () {
    $('.all_item__newscontent').hide();
    $('div.all_item__content').click(function () {
        $(this).next().slideToggle('slow').siblings('p:visible').slideUp('slow');
    });
});