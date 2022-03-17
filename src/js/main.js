

$('ul.some__list').on('click', 'li:not(.some__list-item_active)', function () {
    $(this)
        .addClass('some__list-item_active').siblings().removeClass('some__list-item_active')
        .closest('div.some__tabs').find('div.some__content').removeClass('some__content_active').eq($(this).index()).addClass('some__content_active');
});

