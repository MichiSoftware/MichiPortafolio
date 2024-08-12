function changePage(page){
    $('#main').empty();
    $('#main').load(page);
}
$(document).ready(function () {
    changePage('hero.html');
    Swal.fire({
        title: "Bienvenido/a MichiSoftware",
        text: "Haz click en la imagen para conocer mas!!!"
    });
    $(document).on('click', '.image-container', function () {
        $('.cat').empty();
        $('.cat').load($(this).attr('id') + '.html');
    });
    $(document).on('click', '.nav', function () {
        changePage($(this).attr('id') + '.html');
    });
    $(document).on('click', '#cover', function () {
        $(this).animate({top: '-100%'}, 800, function() {
            $(this).hide();
            $('#uncover').fadeIn();
        });
    });
});


