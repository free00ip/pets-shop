const items = [{
        title: "Игрушка мячик",
        description: "Ваш питомец будет счастлив!",
        tags: ["cat", "dog"],
        price: 500,
        img: "./img/1.jpeg",
    },
    {
        title: "Игрушка лабиринт",
        description: "Поможет в развитии интеллекта!",
        tags: ["cat", "dog"],
        price: 900,
        img: "./img/2.jpeg",
    },
    {
        title: "Игрушка для котят",
        description: "Отвлечет вашего питомца!",
        tags: ["cat"],
        price: 300,
        img: "./img/3.jpeg",
    },
    {
        title: "Миска «Котик»",
        description: "Подойдет и для собак!",
        tags: ["cat", "dog"],
        price: 660,
        img: "./img/4.jpeg",
    },
    {
        title: "Лоток розовый",
        description: "Теперь вы можете забыть о проблемах с туалетом",
        tags: ["cat"],
        price: 400,
        img: "./img/5.jpeg",
    },
    {
        title: "Сухой корм для кошек",
        description: "Специальная формула для милых усатиков!",
        tags: ["cat"],
        price: 200,
        img: "./img/6.jpeg",
    },
    {
        title: "Сухой корм для собак",
        description: "Содержит полный комплекс витаминов",
        tags: ["dog"],
        price: 300,
        img: "./img/7.jpeg",
    },
    {
        title: "Игрушка для собак",
        description: "Теперь вы можете не переживать за личные вещи",
        tags: ["dog"],
        price: 500,
        img: "./img/8.jpeg",
    },
    {
        title: "Лежанка",
        description: "Идеальное место для отдыха!",
        tags: ["cat", "dog"],
        price: 1500,
        img: "./img/9.jpeg",
    },
    {
        title: "Поилка для собак",
        description: "Возьмите с собой в путешествие",
        tags: ["dog"],
        price: 800,
        img: "./img/10.jpeg",
    },
    {
        title: "Переноска",
        description: "Путешествуйте с комфортом!",
        tags: ["cat", "dog"],
        price: 3500,
        img: "./img/11.jpeg",
    },
    {
        title: "Поводок для собак",
        description: "Для чудесных прогулок вместе",
        tags: ["dog"],
        price: 800,
        img: "./img/12.jpeg",
    },
];

const template = document.querySelector('#item-template'); // стучимся к элементу-шаблону
const catalog = document.querySelector('#shop-items'); // стучимся к элементу-каталогу

function makeByTemplate(item) { // функция, которая создает карточки по шаблону
    const myTemplate = template.content.cloneNode(true);

    myTemplate.querySelector('img').src = item.img; // добавляем src 
    myTemplate.querySelector('h1').textContent = item.title;
    myTemplate.querySelector('p').textContent = item.description;

    const tagsContainer = myTemplate.querySelector('.tags');

    item.tags.forEach((tag) => { // из массивов тегов нужно вытащить каждый тег

        const tagElement = document.createElement('div'); // для каждого тега создаем коробочку

        tagElement.classList.add('tag'); // добавляем необходимый класс для стилей
        tagElement.textContent = tag; // наполняем тег-элемент значением тега 
        tagsContainer.append(tagElement); // располагаем коробочку каждого тега внутри коробки для всех тегов
    })

    myTemplate.querySelector('.price').textContent = item.price + "Р";

    catalog.append(myTemplate); // располагаем каждую карточку внутри каталога
}


items.forEach((item) => {
    makeByTemplate(item); // запускаем работу по производству карточек
})


const sendInput = document.querySelector('#search-input'); // стучимся к поисковой строке
const searchButton = document.querySelector('#search-btn'); // стучимся к кнопке
const noElemnt = document.querySelector('#nothing-found');

function searchRequest() { // функция для обработки события

    const searchElement = sendInput.value.trim().toLowerCase(); // записываем введенное значение и форматируем его для сравнения

    let indicator = false; // индикатор, который поменяет значение, если хоть одна карточка будет найдена по поиску

    catalog.innerHTML = ''; // очищаем каталог

    items.forEach((item) => {
        if (item.title.toLowerCase().includes(searchElement)) {
            makeByTemplate(item); // создаем только те карточки, которые подходят по фильтру
            noElemnt.textContent = '';
            indicator = true;
        }
        if (!indicator) {
            noElemnt.textContent = 'Ничего не найдено';
        }

    })

}

searchButton.addEventListener('click', searchRequest); // запускаем работу поисковика при клике