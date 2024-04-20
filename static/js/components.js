$(document).ready(function() {
    // Определение текущего языка страницы
    var lang = $('html').attr('lang'); // 'ru' или 'kz'

    // Пути к файлам header и footer в зависимости от языка
    var headerPath = 'static/components/header-' + lang + '.html';
    var footerPath = 'static/components/footer-' + lang + '.html';

    // Динамическая загрузка header и вызов инициализации меню после загрузки
    $("#header").load(headerPath, function() {
        initializeMenuToggle(); // Убедитесь, что эта функция объявлена в scripts.js
    });

    // Динамическая загрузка footer
    $("#footer").load(footerPath);
});
