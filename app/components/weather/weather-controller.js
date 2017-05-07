
function WeatherController() {
    var weatherService = new WeatherService();

    weatherService.getWeather(function (weather) {
        console.log(weather);
        draw(weather)
        var tempature = weather;
        var temp = document.getElementById("temp")
        temp.addEventListener("click", function(){
            var weaF = Math.round(tempature.main.temp * 9 / 5 - 459.67)
            var weaCel = Math.round((weaF - 32) *  (5/9))
            if(this.dataset.type == "f"){
                this.innerHTML = weaCel +"˚ C"
                this.dataset.type = "c";
            }else{
                this.innerHTML = weaF + "˚ F";
                this.dataset.type= "f";
            }
            
        })
        //What can you do with this weather object?
    })
    function draw(weather) {
        var elem = document.getElementById('weather')
        var template = ''
        var weaC = weather.main.temp - 273.15
        var weaF = weather.main.temp * 9 / 5 - 459.67
       
        var weaFNow = Math.round(weaF)
        var maxWeaF = weather.main.temp_max * 9 / 5 - 459.67
        template += `
        <h2> ${weather.name}</h2>
         <h2 id="temp" data-type="f">${weaFNow}˚ F<h2>
        `
        return elem.innerHTML = template
    }
    
    function failed() {
        var elem = document.getElementById('weather')
        elem.innerHTML = "SORRY YOUR REQUEST FAILED"
    }
}