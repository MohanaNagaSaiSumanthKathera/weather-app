const geocode = require('./utils/geocode');
const forecast = require('./utils/forecast');

geocode('meghalaya',(error,response)=>{
    if(error){
        console.log(error);
    }else{
        console.log(response);
        forecast(response.latitude,response.longitude,(error,response)=>{
            if(error){
                console.log(error);
            }else{
                console.log(response);
            }
        })
    }
})