const request = require('request');

const url = "https://api.darksky.net/forecast/39796fd4fdd578ac4814d061e0b0389d/37.8267,-122.4233";

request({url:url,json:true},(error,response)=>{
    // const dataObject = JSON.parse(response.body);
    // console.log(response.body.currently);
    if(error){
        console.log('Unable to get the weather data!');
    }else if(response.body.error){
        console.log('Unable to find location');
    }else{
    console.log(response.body.daily.data[0].summary+' It is currently '+response.body.currently.temperature+' degrees out. There is a '+response.body.currently.precipProbability+'% chance of rain');
    }
});

const geourl= "https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1Ijoic3Vta2F0MDEiLCJhIjoiY2sxbWYwOW8wMDAycTNtb2R6dDY0NjR1dSJ9.9fTlrPAbKbguaL14H_F8DQ";

request({url:geourl,json:true},(error, response)=>{
    if(error){
        console.log('Unable to fetch the geodata');
    }else if(response.body.message){
        console.log('Please provide the valid search location');
    }else if(response.body.features.length===0){
        console.log('No matches for search query');
    }else{
        const latitude =response.body.features[0].center[1];
        const longitude =response.body.features[0].center[0];
        console.log(latitude,longitude);
    }
});