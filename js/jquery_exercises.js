'use strict';

$(document).ready(function(){


    $('#nameOfLesson').click(function() {
        $(this).css('background-color', '#FF0');
        $('p').css('font-size', '18px');

    });

    $('#container').hover(
        function() {
            $('li').css('background-color', 'red');
        },
        function() {
            $('li').css('background-color', 'black');
        }
    );
});

