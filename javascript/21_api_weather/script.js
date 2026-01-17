fetch("http://api.weatherapi.com/v1/current.json?key=1c898543b96742ccbbe65614260901&q=London&aqi=no").then((res)=>{
    return res.json()
}).then((data)=>{
    console.log(data);
    Weather(data)
}).catch((arr)=>{
    console.log(arr);
})

function Weather(el){
    const div = document.createElement("div")
    const h1 = document.createElement("h1")
    const h2 = document.createElement("h1")
    const h3 = document.createElement("h1")
    const h4 = document.createElement("h1")
    const image = document.createElement("img")
    const h6 = document.createElement("h1")

    h1.innerHTML=el.location.name
    h2.innerHTML=el.location.region
    h3.innerHTML=el.location.country
    h4.innerHTML=el.current.condition.text
    image.src =el.current.condition.icon
    h6.innerHTML =el.current.condition.code

    div.append(h1,h2,h3,h4,image,h6)
    document.querySelector("body").append(div)

}