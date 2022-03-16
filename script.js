// Masonry Grid
$('.grid').masonry({
  itemSelector: '.item',
  columnWidth: 170,
  gutter: 5
});


$('.item').each(function(i){
  setTimeout(function(){
    $('.item').eq(i).addClass('is-visible');
  }, 200 * i);
});