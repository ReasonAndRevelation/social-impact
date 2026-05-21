// === 1. НАХОДИМ ЭЛЕМЕНТЫ НА СТРАНИЦЕ ===
const btnEn = document.getElementById('btn-en');
const btnRu = document.getElementById('btn-ru');
const enElements = document.querySelectorAll('.en-content');
const ruElements = document.querySelectorAll('.ru-content');
const lastModifiedElement = document.getElementById('last-modified');

// === 2. ФУНКЦИЯ ОБНОВЛЕНИЯ ДАТЫ В ЗАВИСИМОСТИ ОТ ЯЗЫКА ===
function updateLastModifiedDate(locale) {
    if (!lastModifiedElement) return; // Защита от ошибок, если элемента нет на странице
    
    const lastMod = new Date(document.lastModified);
    const options = { 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric', 
        hour: '2-digit', 
        minute: '2-digit' 
    };
    
    // Подставляем переданный локаль ('ru-RU' или 'en-US')
    lastModifiedElement.textContent = lastMod.toLocaleDateString(locale, options);
}

// === 3. ОБРАБОТЧИКИ СОБЫТИЙ ДЛЯ КНОПОК ===

// Переключение на английский язык
btnEn.addEventListener('click', () => {
    btnEn.classList.add('active');
    btnRu.classList.remove('active');
    
    enElements.forEach(el => el.style.display = 'block');
    ruElements.forEach(el => el.style.display = 'none');
    
    updateLastModifiedDate('en-US'); // Переводим дату на английский
});

// Переключение на русский язык
btnRu.addEventListener('click', () => {
    btnRu.classList.add('active');
    btnEn.classList.remove('active');
    
    ruElements.forEach(el => el.style.display = 'block');
    enElements.forEach(el => el.style.display = 'none');
    
    updateLastModifiedDate('ru-RU'); // Переводим дату на русский
});

// === 4. ИНИЦИАЛИЗАЦИЯ ПРИ ЗАГРУЗКЕ СТРАНИЦЫ ===
// По умолчанию выводим дату на английском языке
updateLastModifiedDate('en-US');
