document.addEventListener('DOMContentLoaded', () => {
  let $p = $("p");

  $("a").on("click", function (event) {
    event.preventDefault();
    let $anchor = $(this);
    $p.text($anchor.text());
  });
})
