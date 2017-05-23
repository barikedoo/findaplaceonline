$(document).ready(function(){

            // MAIN PAGE

    $('#info-button').on('click', function(event){
       event.stopPropagation();
        $('#info-block').slideToggle();
    });

            // TOURS PAGE

    $('#tour_tags').on('click','.tags', function(){

        var filterType = $(this).data('filter');
            elem = $('.tour_gallery');

        // alert(filterType);
        // $('.tour_gallery').filter(filterType).toggleClass('active_tour');

        if (filterType == 'bike') {
            elem.toggleClass('blurred_tour');
            elem.filter('.bike').toggleClass('active_tour');
        } else if 
            (filterType == 'mountains') {
            elem.toggleClass('blurred_tour');
            elem.filter('.mountains').toggleClass('active_tour');
        } else if 
            (filterType == 'seaside') {
            elem.toggleClass('blurred_tour');
            elem.filter('.seaside').toggleClass('active_tour');
        } else if
            (filterType == 'hiking') {
                elem.toggleClass('blurred_tour');
                elem.filter('.hiking').toggleClass('active_tour');
        } else if 
            (filterType == 'travel') {
                elem.toggleClass('active_tour')
        };
    });
});