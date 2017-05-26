$(document).ready(function(){

            // MAIN PAGE

    $('#info-button').on('click', function(event){
       event.stopPropagation();
        $('#info-block').slideToggle();
    });

            // TOURS PAGE

    $('#tour_tags').on('click','.tags', function(){

        var filterType = '.' + $(this).data('filter'),
            elem = $('.tour_gallery');

            elem.removeClass('active_tour').addClass('blurred_tour');

            elem.filter(filterType).toggleClass('active_tour');
    });




});