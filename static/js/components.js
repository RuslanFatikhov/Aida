$(document).ready(function() {
    // Определение текущего языка страницы
    var lang = $('html').attr('lang'); // 'ru' или 'kz'

    // Пути к файлам header и footer в зависимости от языка
    var headerPath = 'static/components/header-' + lang + '.html';
    var footerPath = 'static/components/footer-' + lang + '.html';

    // Динамическая загрузка header и footer
    $("#header").load(headerPath);
    $("#footer").load(footerPath);
});


