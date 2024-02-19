const cityForm = document.querySelector('form');
const card = document.querySelector('.picture');
const details = document.querySelector('.detail');
const time = document.querySelector('img.time');
const icon = document.querySelector('.icon img')

const updateDetails = (data) => {
    const cityDetails = data.cityDetails;
    
    //update details
    details.innerHTML=`
    <h5 class="city-name">${cityDetails.location.name}</h5>
    <div class="weather">${cityDetails.current.condition.text}</div>
    <div class="temp">
        <span>${cityDetails.current.temp_c}</span>
        <span>&deg;C</span>
    </div>
    `;
    //update weather icon and picture
    let iconSrc = cityDetails.current.condition.icon;
    icon.setAttribute('src',iconSrc);
   
    let timeSrc = cityDetails.current.is_day == 1 ?'images/day.svg' : 'images/night.svg';
    time.setAttribute('src',timeSrc);
    scrollTo(0, document.body.scrollHeight);
    //remove display none
}

const updateCity = async (city) => {
   const cityDetails = await getCity(city);
   return {cityDetails};
}

cityForm.addEventListener('submit', e => {
   //prevent default action
    e.preventDefault();

    //get city value
    const city = cityForm.city.value.trim();
    cityForm.reset();
     
    //update the details with new city
    updateCity(city)
    .then(data => updateDetails(data))
    .catch(err => alert("No matching location found"));

    //set local storage
    localStorage.setItem('city',city);
    
});

if(localStorage.getItem('city')){
    updateCity(localStorage.getItem('city'))
    .then(data => updateDetails(data))
    .catch(err => alert("No matching location found"));
}
