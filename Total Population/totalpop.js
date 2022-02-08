const request = new XMLHttpRequest()
request.open("GET", "https://restcountries.com/v3.1/all", true)
request.send()

request.onload = function() {
    if (request.status == 200) {
        let totPop = JSON.parse(request.responseText)
        let totalPopulation = totPop.reduce((tot, country) => tot + country.population, 0);
        console.log(totalPopulation);
    } else {
        request.onerror = function() {
            console.log("error")
        }
    }
};