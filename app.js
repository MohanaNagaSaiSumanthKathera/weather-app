const geocode = require('./utils/geocode');
const forecast = require('./utils/forecast');
const yargs = require('yargs');

const address = yargs.argv._;
console.log(address);
if(address.length === 0){
    console.log('Please provide valid address');
}else{
    geocode(address,(error,{latitude,longitude,location})=>{
        if(error){
            console.log(error);
        }else{
            forecast(latitude,longitude,(error,forecastData)=>{
                if(error){
                    console.log(error);
                }else{
                    console.log(forecastData);
                }
            })
        }
    });
}

