// === 1. НАХОДИМ ЭЛЕМЕНТЫ НА СТРАНИЦЕ ===
const btnEn = document.getElementById('btn-en');
const btnRu = document.getElementById('btn-ru');
const mainContainer = document.querySelector('.text-container');
const lastModifiedElement = document.getElementById('last-modified');
// Находим все элементы, у которых есть атрибуты перевода (меню и футер)
const translatableElements = document.querySelectorAll('[data-en]');

// === 2. ФУНКЦИЯ ОБНОВЛЕНИЯ ДАТЫ В ЗАВИСИМОСТИ ОТ ЯЗЫКА ===
function updateLastModifiedDate(locale) {
    if (!lastModifiedElement) return; // Защита от ошибок
    
    const lastMod = new Date(document.lastModified);
    const options = { 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric', 
        hour: '2-digit', 
        minute: '2-digit' 
    };
    
    lastModifiedElement.textContent = lastMod.toLocaleDateString(locale, options);
}

// === 3. ФУНКЦИЯ ПЕРЕВОДА ИНТЕРФЕЙСА (МЕНЮ И ФУТЕР) ===
function translateInterface(lang) {
    translatableElements.forEach(el => {
        const translation = el.getAttribute(`data-${lang}`);
        if (translation) {
            el.textContent = translation;
        }
    });
}

// === 4. ОБРАБОТЧИКИ СОБЫТИЙ ДЛЯ КНОПОК ===

// Переключение на английский язык
btnEn.addEventListener('click', () => {
    btnEn.classList.add('active');
    btnRu.classList.remove('active');
    
    // Удаляем класс 'ru', чтобы включились CSS-правила для английского текста
    if (mainContainer) mainContainer.classList.remove('ru');
    
    translateInterface('en');        // Переводим меню на EN
    updateLastModifiedDate('en-US'); // Переводим дату на EN
});

// Переключение на русский язык
btnRu.addEventListener('click', () => {
    btnRu.classList.add('active');
    btnEn.classList.remove('active');
    
    // Добавляем класс 'ru', чтобы включились CSS-правила для русского текста
    if (mainContainer) mainContainer.classList.add('ru');
    
    translateInterface('ru');        // Переводим меню на RU
    updateLastModifiedDate('ru-RU'); // Переводим дату на RU
});

// === 5. ИНИЦИАЛИЗАЦИЯ ПРИ ЗАГРУЗКЕ СТРАНИЦЫ ===
// По умолчанию выводим дату на английском языке
updateLastModifiedDate('en-US');