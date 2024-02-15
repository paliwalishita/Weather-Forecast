
const getCity = async (city) => {
    const url = `https://weatherapi-com.p.rapidapi.com/current.json?q=${city}`;
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'd8e7e96d9amsh97c67729c03c6e2p145baejsn1b900d0755b7',
            'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
        }
    };
    const response = await fetch(url,options);
    const data = await response.json();
    return data;
    }