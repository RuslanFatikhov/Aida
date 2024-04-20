// Функция для инициализации выезжающего меню
function initializeMenuToggle() {
    var menuToggle = document.getElementById('menuToggle');
    var sidebarMenu = document.getElementById('sidebarMenu');
    var closeMenu = document.getElementById('closeMenu'); // Получаем кнопку закрытия

    if (menuToggle && sidebarMenu) {
        menuToggle.addEventListener('click', function() {
            sidebarMenu.classList.toggle('active');
        });
    }

    // Обработчик события для кнопки закрытия
    if (closeMenu) {
        closeMenu.addEventListener('click', function() {
            sidebarMenu.classList.remove('active'); // Убираем класс active, чтобы скрыть меню
        });
    }
}


// Обработчики событий для всплывающего окна
function setupPopup() {
    const popupBtn = document.getElementById('popup-btn');
    const popup = document.querySelector('.popup');
    const overlay = document.querySelector('.overlay');
    const closeBtn = popup ? popup.querySelector('.close-btn') : null;

    function togglePopup(isOpen) {
        if (!popup || !overlay) return;

        const action = isOpen ? 'add' : 'remove';
        popup.classList[action]('visible');
        overlay.classList[action]('visible');

        document[isOpen ? 'addEventListener' : 'removeEventListener']('click', handleDocumentClick);
        document[isOpen ? 'addEventListener' : 'removeEventListener']('keydown', handleEscapePress);
    }

    if (popupBtn) popupBtn.addEventListener('click', () => togglePopup(true));
    if (closeBtn) closeBtn.addEventListener('click', () => togglePopup(false));
    if (overlay) overlay.addEventListener('click', () => togglePopup(false));

    function handleDocumentClick(event) {
        if (popup && !popup.contains(event.target) && event.target !== popupBtn && popup.classList.contains('visible')) {
            togglePopup(false);
        }
    }

    function handleEscapePress(event) {
        if (event.key === 'Escape' && popup && popup.classList.contains('visible')) {
            togglePopup(false);
        }
    }
}

// Вызываем setupPopup после загрузки документа
document.addEventListener('DOMContentLoaded', function() {
    // Инициализация всплывающего окна
    setupPopup();
    
    // Инициализация toggle меню может быть пропущена здесь, так как она вызывается после загрузки шапки в components.js
    // initializeMenuToggle(); // Этот вызов можно закомментировать или удалить, если инициализация происходит в components.js
});
