$(document).ready(function() {
  $("button#cat-attack").click(function() {
    $("ul#cat").prepend("<li>Meow, I scratch you!</li>");
    $("ul#dog").prepend("<li>Woof! I block it!</li>");
    $("ul#cat").children("li").first().click(function() {
      $(this).remove();
    });
    $("ul#dog").children("li").first().click(function() {
      $(this).remove();
    });
  });

  $("button#dog-attack").click(function() {
    $("ul#dog").prepend("<li>Woof, I bite you!</li>");
    $("ul#cat").prepend("<li>Meow! I dodge it!</li>");
    $("ul#cat").children("li").first().click(function() {
      $(this).remove();
    });
    $("ul#dog").children("li").first().click(function() {
      $(this).remove();
    });
  });
});