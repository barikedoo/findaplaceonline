$(document).ready(function(){
    $('#info-button').on('click', function(event){
       event.stopPropagation();
        $('#info-block').slideToggle();
    });


});

