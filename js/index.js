//reflow after page load
$(document).foundation('accordion', 'reflow');

//animate open/close
$(".accordion dd").on("click", "a:eq(0)", function (event) {
    var dd_parent = $(this).parent();

    if(dd_parent.hasClass('active')) {
        $(".accordion dd div.content:visible").slideToggle("normal");
    } else {
      $(".accordion dd div.content:visible").slideToggle("normal");
      $(this).parent().find(".content").slideToggle("normal");
    }
  //return false;
});