const request = require('request');

const geocode = (address, callback)=>{
    const url= "https://api.mapbox.com/geocoding/v5/mapbox.places/"+encodeURIComponent(address)+".json?access_token=pk.eyJ1Ijoic3Vta2F0MDEiLCJhIjoiY2sxbWYwOW8wMDAycTNtb2R6dDY0NjR1dSJ9.9fTlrPAbKbguaL14H_F8DQ";
    request({url:url,json:true},(error, response)=>{
        if(error){
            callback('Unable to fetch the geodata',undefined);
        }else if(response.body.message){
            callback('Please provide the valid search location',undefined);
        }else if(response.body.features.length===0){
            callback('No matches for search query',undefined);
        }else{
            const latitude =response.body.features[0].center[1];
            const longitude =response.body.features[0].center[0];
            callback(undefined,{
               latitude: latitude,
               longitude: longitude,
               location: response.body.features[0].place_name
            });
        }
    });
};

module.exports = geocode;