const request = require('request');

const forecast=(latitude,longitude,callback)=>{
    const url = "https://api.darksky.net/forecast/39796fd4fdd578ac4814d061e0b0389d/"+latitude+","+longitude;
    console.log(latitude,longitude);
    request({url:url,json:true},(error,response)=>{
        // const dataObject = JSON.parse(response.body);
        // console.log(response.body.currently);
        if(error){
           callback('Unable to get the weather data!',undefined);
        }else if(response.body.error){
            callback('Unable to find location',undefined);
        }else{
        callback(undefined,response.body.daily.data[0].summary+' It is currently '+response.body.currently.temperature+' degrees out. There is a '+response.body.currently.precipProbability+'% chance of rain'
        );
          }
    });
};


module.exports = forecast;