$(function () {

    $('#accordeon .acc-head').on('click', function () {
        $('#accordeon .acc-body').not($(this).next()).slideUp(200);
        $(this).next().slideToggle(200);
    });

    $('#menu').on('click', function () {
       $('.desc-link').addClass('active');
       $('.menu-bg').addClass('active');
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