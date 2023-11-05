/* Генерация предсказания должна происходить при клике на кнопку «предсказать судьбу» */
const sendButton = document.querySelector('.forecast-btn'); // при нажатии на кнопку генерируется предсказание
const saveForecasts = document.querySelector('.forecasts'); //старое предсказание добавляется в forecasts
const forecastList = document.querySelector('#forecast-item'); //добавления предсказания в список
const currentForecast = document.querySelector('.current-forecast');

const forecast = ['Сегодня ночью ты выспишься', 'Завтра на тебя упадет пачка денег', 'Скоро ты станешь Frontend-разработчиком',
    'Следующий раздел обучения будет труднее', 'Cкоро поступит тебе выгодное предложение'
];


sendButton.addEventListener('click', getClick);
let count = 0; // объявим переменную-счетчик

function getClick() {

    if (count == 0) { //при первом клике выполняется след условие 
        const newForecast = document.querySelector("h1");
        newForecast.innerText = `${getRandomText()}`;

        const newProbability = document.querySelector("p");
        newProbability.innerText = `Вероятность: ${getRandomInt()}`;

        function makeForecastItemByTemplate(forecast, probability) {
            const lastForecast = forecastList.content.cloneNode(true);

            lastForecast.querySelector('h3').textContent = forecast;
            lastForecast.querySelector('p').textContent = probability;

            return lastForecast;
        }

        const listForecast = makeForecastItemByTemplate(newForecast.textContent, newProbability.textContent);
        saveForecasts.prepend(listForecast);

        count++; //и увеличиваем переменную счетчика на 1 

    } else { // при клике не равном 0 выполняется другое условие 

        const newForecast = document.querySelector("h1");
        newForecast.innerText = `${getRandomText()}`;

        const newProbability = document.querySelector("p");
        newProbability.innerText = `Вероятность: ${getRandomInt()}`;

        function makeForecastItemByTemplate(forecast, probability) {
            const lastForecast = forecastList.content.cloneNode(true);

            lastForecast.querySelector('h3').textContent = forecast;
            lastForecast.querySelector('p').textContent = probability;

            return lastForecast;
        }

        const listForecast = makeForecastItemByTemplate(newForecast.textContent, newProbability.textContent);
        saveForecasts.prepend(listForecast);

        count = 0;

    }
};

function getRandomText() { //функция генерации текста 
    const randomIndex = Math.floor(Math.random() * forecast.length); // генерируем случайный индекс от 0 до длины массива
    return forecast[randomIndex]; // возвращаем случайный текст из массива
};

function getRandomInt() { //функция генерации процента 
    return Math.round(Math.random() * 100) + '%';
}
/* Заранее заготовь 3-5 предсказаний и в зависимости от того, как лягут карты судьбы (или что скажет Math.random) показывай их пользователю */

/* Подставляй текст нового предсказания в .current-forecast h1 */

/* Показывай процент вероятности, с которым предсказание сбудется — в верстке это .current-forecast p */

/* Данный процент также нужно генерировать автоматически, он может принимать значения от 0 до 100% */

/* Совет: заведи функцию-хелпер, которая будет заниматься только генерацией данных в диапазоне от min до max и используй ее где нужно */

/* При генерации нового предсказания старое предсказание должно добавляться в начало списка «Мои предсказания» — .forecasts  */

/* Для добавления предсказания в список воспользуйся шаблоном forecast-item */