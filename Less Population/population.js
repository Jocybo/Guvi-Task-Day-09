const request = new XMLHttpRequest()
request.open("GET", "https://restcountries.com/v3.1/all", true)
request.send()

request.onload = function() {
    if (request.status == 200) {
        let less = JSON.parse(request.responseText)
        let Population = less.filter((coun) => (coun.population < 200000));
        console.log(Population);
    } else {
        request.onerror = function() {
            console.log("error")
        }
    }
}