const arrLanguage = {
    contacts: {
        en: 'Contacts',
        ru: 'Контакты'
    },
    location: {
        en: 'Belarus, Hrodna',
        ru: 'Беларусь, Гродно'
    },
    education: {
        en: 'Education',
        ru: 'Образование'
    },
    university: {
        en: 'Brest State Technical University',
        ru: 'Брестский государственный технический университет'
    },
    faculty: {
        en: 'Faculty',
        ru: 'Факультет'
    },
    facultyName: {
        en: 'Mechanical Engineering',
        ru: 'Машиностроительный'
    },
    specialty: {
        en: 'Specialty',
        ru: 'Специальность'
    },
    specialtyName: {
        en: 'Vehicle maintenance',
        ru: 'Техническая эксплуатация автомобилей'
    },
    skills: {
        en: 'Skills',
        ru: 'Навыки'
    },
    languages: {
        en: 'Foreign languages',
        ru: 'Иностранные языки'
    },
    english: {
        en: 'English (A2)',
        ru: 'Английский (A2)'
    },
    firstName: {
        en: 'Ashmiana',
        ru: 'Ошмяна'
    },
    lastName: {
        en: 'Siarhei',
        ru: 'Сергей'
    },
    profession: {
        en: 'Web-developer',
        ru: 'Веб-разработчик'
    },
    aboutMe: {
        en: 'About me',
        ru: 'Обо мне'
    },
    firstAbout: {
        en: 'Hello! I want to become a junior frontend developer. I started studying web development at Rolling Scopes School, where I took js courses and received two certificates of successful completion.',
        ru: 'Привет! Я хочу стать младшим фронтенд-разработчиком. Я начал изучать веб-разработку в школе Rolling Scopes School, где прошел курсы js и получил два сертификата об успешном окончании.'
    },
    secondAbout: {
        en: 'Now I continue my studies at Rolling Scopes School. I improve my skills by learning the Angular framework. In the future, I would like to work in a strong team with great prospects.',
        ru: 'Сейчас я продолжаю обучение в школе Rolling Scopes. Я совершенствую свои навыки, изучая фреймворк Angular. В будущем хотелось бы работать в сильной команде с большими перспективами.'
    },
    already: {
        en: 'What i already did',
        ru: 'Что я уже сделал'
    },
    shelter: {
        en: 'Shelter project',
        ru: 'Проект приют для животных'
    },
    shelterText: {
        en: 'This is a project in which I had to design a site consisting of two pages, make it adaptive and interactive.',
        ru: `Это проект, в котором мне предстояло спроектировать сайт, состоящий из двух страниц, сделать его адаптивным и интерактивным.`
    },
    brief: {
        en: 'A brief description of the additional functionality:',
        ru: 'Краткое описание дополнительного функционала:'
    },
    briefOne: {
        en: '- on the main page, a slider with control arrows is implemented.',
        ru: '- на главной странице реализаван слайдер со стрелками управления.'
    },
    briefTwo: {
        en: `- on the "Our pets" page, when you click on a pet's card, a modal window pops up.`,
        ru: '- на странице "Our pets" при нажатии на карточку питомца всплывает модальное окно.'
    },
    briefThree: {
        en: '- when the screen width is less than 768px, the selection by category occurs in the burger menu.',
        ru: '- при ширине экрана менее 768px выбор по категориям происходит в бургер меню.'
    },
    store: {
        en: 'Online-Store',
        ru: 'Интернет магазин'
    },
    storeText: {
        en: 'The task was to create an online store selling mobile phones, where goods would have the following functionality: filtering, sorting, searching and adding to the cart.',
        ru: 'Стояла задача создать интернет-магазин по продаже мобильных телефонов, где товары будут иметь следующий функционал: фильтрация, сортировка, поиск и добавление в корзину.'
    },
    keyboard: {
        en: 'Virtual keyboard',
        ru: 'Виртуальная клавиатура'
    },
    keyboardText: {
        en: 'In this project, it was necessary to create a virtual keyboard in which all the necessary elements are generated using JavaScript (the index.html file must be empty).',
        ru: 'В этом проекте необходимо было создать виртуальную клавиатуру, в которой все необходимые элементы генерируются с помощью JavaScript (файл index.html должен быть пустым).'
    },
    portfolio: {
        en: 'Landing page Portfolio',
        ru: 'Целевая страница Портфолио'
    },
    portfolioText: {
        en: `The task was to create a landing page for the photographer's portfolio, make it adaptive and interactive.`,
        ru: 'Стояла задача создать лендинг для портфолио фотографа, сделать его адаптивным и интерактивным.'
    },
    hobbies: {
        en: 'Hobbies',
        ru: 'Увлечения'
    },
    books: {
        en: 'Reading books',
        ru: 'Чтение книг'
    },
    self: {
        en: 'Self-development',
        ru: 'Саморазвитие'
    },
    cars: {
        en: 'Cars',
        ru: 'Автомобили'
    },
    fishing: {
        en: 'Fishing',
        ru: 'Рыбалка'
    }


}
const button = document.querySelector('.wrapper-btn')
const buttonEn = document.querySelector('#en');
const buttonRu = document.querySelector('#ru');


button.addEventListener('click', changeLanguage)

function change(text){
    for ( let key in arrLanguage){
        document.querySelector(`#${key}`).innerText = arrLanguage[key][text]
    }
}

function changeLanguage() {
    if (event.target.id === 'ru'){
        buttonRu.classList.add('language_active');
        buttonEn.classList.remove('language_active');
        change(event.target.id)
    }else if(event.target.id === 'en'){
        buttonRu.classList.remove('language_active');
        buttonEn.classList.add('language_active');
        change(event.target.id)
    }
}

