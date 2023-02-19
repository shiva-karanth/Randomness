const btn=document.getElementById('generate-meme')
const tit=document.getElementById('title')
const aut=document.getElementById('author')
const image=document.getElementById('im')
const updateDetails=(url,title,author)=>{
    image.setAttribute('src',url)
    tit.innerText=title
    aut.innerText= `meme by : ${author}`
}
const generatememe=()=>{
    fetch("https://meme-api.com/gimme")
    .then((response)=>response.json())
    .then((data) =>{
        updateDetails(data.url,data.title,data.author)
    });
}
btn.addEventListener('click',generatememe)