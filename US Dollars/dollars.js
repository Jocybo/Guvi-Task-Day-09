const request = new XMLHttpRequest()
request.open("GET", "https://restcountries.com/v3.1/all", true)
request.send()

request.onload = function() {
    if (request.status == 200) {
        let dollar = JSON.parse(request.responseText)
        dollar.filter((e) => e.currencies)
            .filter((e) => e.currencies.USD)
            .map((e) => {
                console.log(e.name.official)

            })

    } else {
        request.onerror = function() {
            console.log("error")
        }
    }
}