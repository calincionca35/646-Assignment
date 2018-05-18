//A jQuery Tabbed Menu Bar

$(document).ready(function () {
    "use strict";
    $('p:gt(0)').hide();
    $('#one').on('click mouseover', function (e) {
        $('#outcomes').show();
        $('#modules, #bio').hide();
        e.preventDefault();
    });
    $('#two').on('click mouseover', function (e) {
        $('#modules').show();
        $('#outcomes, #bio').hide();
        e.preventDefault();
    });
    $('#three').on('click mouseover', function (e) {
        $('#bio').show();
        $('#outcomes, #modules').hide();
        e.preventDefault();
    });
});