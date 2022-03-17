const form = document.querySelector("section.top-banner form");
const input = document.querySelector("div.container input");
const msg = document.querySelector("span.msg");
const cityList =document.querySelector(".ajax-section .cities");

localStorage.setItem("apiKey", EncryptStringAES("a79b14b5e07c9c8156918f2f7b9d4e12"));

form.addEventListener("submit", (event)=>{
    event.preventDefault();
    getWeatherdataFromApi();
});

const getWeatherdataFromApi = async()=>{
    let apiKey = DecryptStringAES(localStorage.getItem("apiKey"));
    let inputValue = input.value;
    let units = "metric";
    let lang = "tr";
    // alert("apiKey: " + apiKey);
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${inputValue}&appid=${apiKey}&units=${units}&lang=${lang}`;

    try {
        const response = await axios(url);
        // console.log(response);
        const {main, name, sys, weather} = response.data;
        // console.log(weather[0].icon);
        //img url
        const iconUrl = `https://openweathermap.org/img/wn/${
            weather[0].icon}@2x.png`;
        // console.log(iconUrl);
        let createdcityCardLi = document.createElement("li");
        createdcityCardLi.classList.add("city");`
        <h2 class="city-name" data-name="${name}, ${sys.country}">
            <span>${name}</span>
            <sup>${sys.country}</sup>
        </h2>
        <div class="city-temp">${Math.round(main.temp)}<sup>°C</sup></div>
        <figure>
            <img class="city-icon" src="${iconUrl}">
            <figcaption>${weather[0].description}</figcaption>
        </figure>`;

    } 
    catch (error) {
        msg.innerText = error;
        
    }
}