// When Dom is loaded run...
document.addEventListener("DOMContentLoaded", () => {
    loadStates();
    clickEvent();

});

////////////////////////////////////////////

// When submit is activated, run...
document.addEventListener("submit", (event) => {
    event.preventDefault();
    fetchData();
});

////////////////////////////////////////////

function loadStates(){
    const stateNames = [
        'Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California', 'Colorado', 'Connecticut',
        'Delaware', 'Florida', 'Georgia', 'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas',
        'Kentucky', 'Louisiana', 'Maine', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota', 
        'Mississippi', 'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New Hampshire', 'New Jersey', 
        'New Mexico', 'New York', 'North Carolina', 'North Dakota', 'Ohio', 'Oklahoma', 'Oregon',
        'Pennsylvania', 'Rhode Island', 'South Carolina', 'South Dakota', 'Tennessee', 'Texas', 'Utah', 
        'Vermont', 'Virginia', 'Washington', 'West Virginia', 'Wisconsin', 'Wyoming'
    ];
    // create table to append new div
    let table = document.querySelector(".usStates");

    stateNames.forEach((state)=>{
        let newDiv = document.createElement("div");
        newDiv.setAttribute("class", "column");
        newDiv.setAttribute("id", state);
        newDiv.textContent = state;
        table.appendChild(newDiv);
    });
};

////////////////////////////////////////////

function clickEvent(){
    let eachState = document.querySelectorAll(".column");
    eachState.forEach((e)=>{
        // When a div is clicked run...
        e.addEventListener("click", () => {
            document.getElementById("info").value = e.id;
        });
    })
};

////////////////////////////////////////////

function fetchData(){
    let city = document.getElementById("info").value;
    let searchValue = `https://goweather.herokuapp.com/weather/${city}`;
    fetch(searchValue)
    .then(response => response.json())
    .then(data => {
        let container = document.querySelector("#res");
        let temp = data.temperature;
        let des = data.description
        // // Get number/s by itself: 
        let matches = temp.match(/(\d+)/);
            if (matches) {
                // set first numbers found to variable number.
                let number = matches[0];
                // convert C to F.
                let farenNumber = number * 9 / 5 + 32;
                // Append to DOM...
                let newli = document.createElement("li");
                // Check for city name ending with an s, (if so, dont append *'s*)
                if(city.slice(-1) === "s"){
                    newli.innerText = `${city} temperature is ${temp} / ${farenNumber} \xB0F. Description: ${des}`;
                }else{
                    newli.innerText = `${city}'s temperature is ${temp} / ${farenNumber} \xB0F. Description: ${des}`;
                };
                container.appendChild(newli);
            };    
    });
 };