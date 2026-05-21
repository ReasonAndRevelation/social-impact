// Находим кнопки переключения языка по их ID
const btnEn = document.getElementById('btn-en');
const btnRu = document.getElementById('btn-ru');

// Находим все блоки с английским и русским текстом
const enElements = document.querySelectorAll('.en-content');
const ruElements = document.querySelectorAll('.ru-content');

// Функция для включения английского языка
btnEn.addEventListener('click', () => {
    // Управляем активным классом кнопок
    btnEn.classList.add('active');
    btnRu.classList.remove('active');
    
    // Показываем английские блоки, скрываем русские
    enElements.forEach(el => el.style.display = 'block');
    ruElements.forEach(el => el.style.display = 'none');
});

// Функция для включения русского языка
btnRu.addEventListener('click', () => {
    // Управляем активным классом кнопок
    btnRu.classList.add('active');
    btnEn.classList.remove('active');
    
    // Показываем русские блоки, скрываем английские
    ruElements.forEach(el => el.style.display = 'block');
    enElements.forEach(el => el.style.display = 'none');
});
