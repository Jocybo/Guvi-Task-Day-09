const request = new XMLHttpRequest()
request.open("GET", "https://restcountries.com/v3.1/all")
request.send()

request.onload = function() {
    if (request.status == 200) {
        let c = JSON.parse(request.responseText)
        let asianContinent = c.filter((con) => (con.region === "Asia"));
        console.log(asianContinent);
    } else {
        request.onerror = function() {
            console.log("error")
        }
    }
}