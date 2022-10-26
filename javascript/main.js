const span1 = document.querySelector('.un')
const span2 = document.querySelector('.deux')
const paragraphe = document.createElement('p')
const boutonRandomJoke = document.querySelector('.randomJoke')
const paragrapheCategory = document.createElement('p')
const select = document.querySelector('select')





boutonRandomJoke.addEventListener('click',()=>{
    fetch("https://api.chucknorris.io/jokes/random")
        .then(response => response.json())
        .then(response => paragraphe.textContent=response.value)

    span1.appendChild(paragraphe);
})



select.addEventListener('change', function() {
    let index = select.value;
    console.log(index)

    fetch(`https://api.chucknorris.io/jokes/random?category=${index}`)
        .then(response => response.json())
        .then(response => paragrapheCategory.textContent=response.value);

    span2.appendChild(paragrapheCategory)

})
