let city = "Chicago";
function getInfo() {
    fetch(`https://goweather.herokuapp.com/weather/${city}`)
    .then(response => response.json())
    .then(data => {
        console.log(data)
    });
}

getInfo();