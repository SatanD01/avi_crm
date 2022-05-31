$(function () {

    $('#accordeon .acc-head').on('click', function () {
        $('#accordeon .acc-body').not($(this).next()).slideUp(200).removeClass('active');
        $(this).next().slideDown(200).addClass('active');
        $('#accordeon').parent().find('.bi-caret-down-fill').removeClass('active');
        $(this).find('.bi-caret-down-fill').addClass('active');
        $('#accordeon').parent().find('.acc-head').removeClass('active');
        $(this).addClass('active');
    });

    $('.close-menu-btn').on('click', function () {
        $('#accordeon').animate({
            opacity: 0.25,
            left: "-=270",
            width: "toggle"
        }, 200);
    });

    $('#menu').on('click', function () {
        $('#accordeon').animate({
            opacity: 1,
            left: "+=270",
            width: "toggle"
        }, 200);
        // $('.desc-link').addClass('active');
       // $('.menu-bg').addClass('active');
    });

    $('.menu-bg').on('click', function () {
        $('.desc-link').removeClass('active');
        $('.menu-bg').removeClass('active');
    });

    const date = new Litepicker({
        element: document.getElementById('date'),
        hotelMode: 1,
        disallowBookedDaysInRange: 0,
        selectForward: 0,
        minDays: 1,
        singleMode: false,
        minDate: new Date(),
        tooltipText: {
            one: "ночь",
            few: "ночи",
            other: "ночей",
            many: "ночей",
        },
    });

});