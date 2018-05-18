//A jQuery Image Selection Slideshow

$(document).ready(function () {
    "use strict";
    $('img:gt(0)').hide();
    $('#one').addClass("current");
    $("#one").click(function () {
        $('#pic1').fadeIn(1000).show();
        $("#pic2, #pic3, #pic4, #pic5").hide();
        $('#one').addClass("current");
        $('#two, #three, #four, #five').removeClass('current');
    });
    $("#two").click(function () {
        $('#pic2').fadeIn(1000).show();
        $("#pic1, #pic3, #pic4, #pic5").hide();
        $('#two').addClass("current");
         $('#one, #three, #four, #five').removeClass('current');
    });
    $("#three").click(function () {
        $('#pic3').fadeIn(1000).show();
        $("#pic1, #pic2, #pic4, #pic5").hide();
        $('#three').addClass("current");
        $('#one, #two, #four, #five').removeClass('current');
    });
    $("#four").click(function () {
        $('#pic4').fadeIn(1000).show();
        $("#pic1, #pic2, #pic3, #pic5").hide();
        $('#four').addClass("current");
        $('#one, #three, #two, #five').removeClass('current');
    });
    $("#five").click(function () {
        $('#pic5').fadeIn(1000).show();
        $("#pic1, #pic2, #pic3, #pic4").hide();
        $('#five').addClass("current");
        $('#one, #three, #four, #two').removeClass('current');
    });
});