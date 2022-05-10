let currentSelection = 0;

$('.rating-options button').click(function(){
    currentSelection = $(this).text();
    $('.rating-options button').removeClass('selected');
    $(this).addClass('selected');
});


$('.submit-button').click(function(){
    $('.rating-container').hide();
    $(".thank-you-container").show();
    $('.rating').text(currentSelection);
});