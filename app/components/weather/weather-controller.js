
function WeatherController() {
    var weatherService = new WeatherService();

	weatherService.getWeather(function(weather){
		console.log(weather);
		draw(weather)
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
            
                    <h2>${weaF}</h2>
        `
        return elem.innerHTML = template
    }
    function failed() {
        var elem = document.getElementById('weather')
        elem.innerHTML = "SORRY YOUR REQUEST FAILED"
    } 
}