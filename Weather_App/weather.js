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
        console.log(response);
        const {main, name, sys, weather} = response.data;

    } 
    catch (error) {
        msg.innerText = error;
        
    }
}


