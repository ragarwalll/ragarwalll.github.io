$("#homec").click(function(){
    $('input[type="checkbox"]:checked').prop('checked',false);
    $('html,body').animate({
        scrollTop: $(".cover").offset().top},
        'slow');
});

$("#statusc").click(function(){
    $('input[type="checkbox"]:checked').prop('checked',false);
    $('html,body').animate({
        scrollTop: $(".status").offset().top},
        'slow');
});

$("#projectc").click(function(){
    $('input[type="checkbox"]:checked').prop('checked',false);
    $('html,body').animate({
        scrollTop: $(".project").offset().top},
        'slow');
});

$("#drawingc").click(function(){
    $('input[type="checkbox"]:checked').prop('checked',false);
    $('html,body').animate({
        scrollTop: $(".drawing").offset().top},
        'slow');
});

$("#resumec").click(function(){
    $('input[type="checkbox"]:checked').prop('checked',false);
    $('html,body').animate({
        scrollTop: $(".resume").offset().top},
        'slow');
});
