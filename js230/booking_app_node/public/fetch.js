// document.addEventListener('DOMContentLoaded', async () => {
//   $('li').css('font-weight', 'bold');
// });

$().ready(function () {
  $('a').on('click', function(e) {
    e.preventDefault();
  
    $('article').hide().filter('[data-block=' + $(this).attr('data-block') + ']').show();
  });

  var gold = document.getElementById('gold');
  
  
  console.table(gold.dataset);
});
