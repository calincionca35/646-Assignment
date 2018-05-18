//A jQuery Accordion

$(document).ready(function () {
    "use strict";
    $('p').hide();
    $('#one').click(function () {
        $('#outcomes').slideToggle();
        $(this).toggleClass('current');
        $(this).html() === "Less Learning Outcomes" ? $(this).html('More Learning Outcomes') : $(this).html('Less Learning Outcomes');
    });
    $('#two').click(function () {
        $('#modules').slideToggle();
        $(this).toggleClass('current');
        $(this).html() === "Less Learning Modules" ? $(this).html('More Learning Modules') : $(this).html('Less Learning Modules');
    });
    $('#three').click(function () {
        $('#bio').slideToggle();
        $(this).toggleClass('current');
        $(this).html() === "Less Instructor Bio" ? $(this).html('More Instructor Bio') : $(this).html('Less Instructor Bio');
    });
});