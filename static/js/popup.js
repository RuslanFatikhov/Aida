document.addEventListener('DOMContentLoaded', function() {
    const popupBtn = document.getElementById('popup-btn');
    const popup = document.querySelector('.popup');
    const overlay = document.querySelector('.overlay');
    
    // Если элемент .close-btn существует внутри popup, присваиваем его переменной, иначе null
    const closeBtn = popup ? popup.querySelector('.close-btn') : null;

    // Функция для переключения видимости popup и overlay
    function togglePopup(isOpen) {
        if (!popup || !overlay) return; // Если popup или overlay не найдены, прекращаем выполнение функции

        const action = isOpen ? 'add' : 'remove'; // Определение действия в зависимости от isOpen
        popup.classList[action]('visible');
        overlay.classList[action]('visible');
        
        // Управление событиями для закрытия popup
        document[isOpen ? 'addEventListener' : 'removeEventListener']('click', handleDocumentClick);
        document[isOpen ? 'addEventListener' : 'removeEventListener']('keydown', handleEscapePress);
    }

    // Событие клика на кнопку для открытия popup
    if (popupBtn) popupBtn.addEventListener('click', () => togglePopup(true));
    // Событие клика на кнопку закрытия popup
    if (closeBtn) closeBtn.addEventListener('click', () => togglePopup(false));
    // Событие клика на overlay для закрытия popup
    if (overlay) overlay.addEventListener('click', () => togglePopup(false));

    // Функция для обработки клика вне popup для его закрытия
    function handleDocumentClick(event) {
        if (popup && !popup.contains(event.target) && event.target !== popupBtn && popup.classList.contains('visible')) {
            togglePopup(false);
        }
    }

    // Функция для обработки нажатия клавиши Escape для закрытия popup
    function handleEscapePress(event) {
        if (event.key === 'Escape' && popup && popup.classList.contains('visible')) {
            togglePopup(false);
        }
    }
});
