let key = "c53064ae9e586a85128345c84c22d03b"


function putOnScreen(dice){
    console.log(dice)
    document.querySelector(".city").innerHTML = "Tempo em " + dice.name
    document.querySelector(".temp").innerHTML = Math.floor (dice.main.temp) + "°C"
    document.querySelector(".description").innerHTML = dice.weather[0].description
    document.querySelector(".icone").src = "https://openweathermap.org/img/wn/" + dice.weather[0].icon + ".png"
    document.querySelector(".moisture").innerHTML = "Umidade: " + dice.main.humidity + "%"
}


async function seekCity(city){
    let dice = await fetch("https://api.openweathermap.org/data/2.5/weather?q=" + 
    city + 
    "&appid=" + 
    key +
    "&lang=pt_br" +
    "&units=metric"
    )
    .then(resposta => resposta.json())

    putOnScreen(dice)
}


function clickButton(){
    let city = document.querySelector(".input").value

    seekCity (city)
}