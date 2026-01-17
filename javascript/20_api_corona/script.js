fetch("https://api.rootnet.in/covid19-in/stats/latest").then((res) => {
    return res.json()

}).then((data) => {
    console.log(data);
    corona(data)
}).catch((arr) => {
    console.log(arr);
})

function corona(val) {
    const regions = val.data.regional
    const randomIndex = Math.floor(Math.random() * regions.length)
    const randomRegion = regions[randomIndex]


    const div = document.createElement("div")
    const loc = document.createElement("h3")
    const confirmedCasesIndian = document.createElement("h4")
    const deaths = document.createElement("h4")
    const discharged = document.createElement("h4")

    loc.innerHTML = val.data.regional[randomIndex].loc
    confirmedCasesIndian.innerHTML = val.data.regional[randomIndex].confirmedCasesIndian
    deaths.innerHTML = val.data.regional[randomIndex].deaths
    discharged.innerHTML = val.data.regional[randomIndex].discharged

    div.append(loc, confirmedCasesIndian, deaths, discharged)
    document.querySelector("body").append(div)

}