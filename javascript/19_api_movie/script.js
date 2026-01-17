fetch("http://www.omdbapi.com/?i=tt3896198&apikey=89d8d53b").then((res)=>{
      return res.json()
}).then((data)=>{
    console.log(data);
    display(data)
}).catch((err)=>{
    console.log(err);
})

function display(el){
    const div= document.createElement("div")
    const image= document.createElement("img")
    image.src=el.Poster;
    const title= document.createElement("h1")
    title.innerHTML= el.Title;
    const Rating= document.createElement("h1")
    Rating.innerHTML = el.Ratings[0].Value;
    div.append(image,title,Rating)
    document.querySelector("body").append(div)
}