const request = new XMLHttpRequest()
request.open("GET", "https://restcountries.com/v3.1/all", true)
request.send()

request.onload = function() {
    if (request.status == 200) {
        let a = JSON.parse(request.responseText)
        a.forEach((count) =>
            console.log(count.name, count.capital, count.flags.png))
    } else {
        request.onerror = function() {
            console.log("error")
        }
    }
}