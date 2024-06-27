import '../css/styles.css'
const searchInput = document.querySelector('.search-input');
const searchBtn = document.querySelector('.search-btn')
const retryBtn = document.querySelector('.home-btn')

let API_KEY = process.env.API_KEY

searchBtn.addEventListener('click', async(e)=>{
    const searchLocation = searchInput.value;
    await apiCall(searchLocation)
});

retryBtn.addEventListener('click', (e)=>{
    document.querySelector('.error').style.display='none';
});

async function apiCall(location){
    try{
        document.querySelector('.loading').style.display = 'block';
        const res = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=${location || 'Nairobi'}&days=5`,{mode:'cors'})
        const data = await res.json()
        document.querySelector('.loading').style.display = 'none';
        //console.log(data)
        renderData(data)
    } catch (err) {
        document.querySelector('.error').style.display='flex';
        /*document.querySelector('.err-msg').textContent = err*/
        document.querySelector('.err-msg').textContent = "Something went wrong. Please try again"
    }
}


function renderData(data){
    document.querySelector('.condition').textContent = data.current.condition.text;
    document.querySelector('.degree').textContent = data.current.temp_c + ' °C';
    document.querySelector('.date-today').textContent = data.location.localtime;
    document.querySelector('.curr-location').textContent = `${data.location.country}, ${data.location.name}`;
    document.querySelector('.sunrise-time').textContent = data.forecast.forecastday[0].astro.sunrise;
    document.querySelector('.sunset-time').textContent = data.forecast.forecastday[0].astro.sunset;
    document.querySelector('.humidity').textContent = data.current.humidity + '%';
    document.querySelector('.pressure').textContent = data.current.pressure_mb + ' mb';
    document.querySelector('.visibility').textContent = data.current.vis_km + ' km';
    document.querySelector('.feelslike_c').textContent = data.current.feelslike_c + ' °C';
    populate3dayForecast(data);
    populateHourlyForecast(data);

}
function populateHourlyForecast(data) {
    const hourlyForecast = data.forecast.forecastday[0].hour;
    const currentHour = new Date().getHours();
    const weatherSliderItems = document.querySelectorAll('ul.weather .slider-item');
    const windSliderItems = document.querySelectorAll('ul.wind .slider-item');

    for (let i = 0; i < weatherSliderItems.length; i++) {
        const hourData = hourlyForecast[(currentHour + i) % 24];
        const time = new Date(hourData.time).getHours();
        const formattedTime = time % 12 || 12;
        const amPm = time < 12 ? 'AM' : 'PM';

        const sliderCard = weatherSliderItems[i].querySelector('.slider-card');
        sliderCard.querySelector('p:first-child').textContent = `${formattedTime} ${amPm}`;
        sliderCard.querySelector('img').src = hourData.condition.icon;
        sliderCard.querySelector('img').alt = hourData.condition.text;
        sliderCard.querySelector('p:last-child').textContent = `${Math.round(hourData.temp_c)} °C`;
    }

    for (let i = 0; i < windSliderItems.length; i++) {
        const hourData = hourlyForecast[(currentHour + i) % 24];
        const time = new Date(hourData.time).getHours();
        const formattedTime = time % 12 || 12;
        const amPm = time < 12 ? 'AM' : 'PM';

        const sliderCard = windSliderItems[i].querySelector('.slider-card');
        sliderCard.querySelector('p:first-child').textContent = `${formattedTime} ${amPm}`;
        sliderCard.querySelector('img').src = hourData.condition.icon;
        sliderCard.querySelector('img').alt = hourData.condition.text;
        sliderCard.querySelector('p:last-child').textContent = `${Math.round(hourData.wind_kph)} km/h`;
    }
}
function populate3dayForecast(data) {
    const forecast = data.forecast.forecastday.slice(1, 4);
    const forecastList = document.querySelectorAll('ul.forecast-list .card-item');

    forecast.forEach((day, index) => {
        if (index < forecastList.length) {
            const date = new Date(day.date).toLocaleDateString();
            const weekday = new Date(day.date).toLocaleString('en-us', { weekday: 'long' });
            const condition = day.day.condition.text;
            const icon = day.day.condition.icon;

            const listItem = forecastList[index];
            const weatherIcon = listItem.querySelector('.weather-icon');
            const dateElement = listItem.querySelectorAll('.forecast-details')[0];
            const dayElement = listItem.querySelectorAll('.forecast-details')[1];

            weatherIcon.src = icon;
            weatherIcon.alt = condition;
            dateElement.textContent = date;
            dayElement.textContent = weekday;
        }
    });
}
apiCall();
