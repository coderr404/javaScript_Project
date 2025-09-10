const cardContainer = document.querySelector('.card-container')
const input = document.querySelector('input');
const btn = document.querySelector('button');
const result = document.querySelector('.result')



btn.addEventListener('click', ()=>{
cardContainer.innerHTML = "";
 result.style.display = 'none'
//console.log(input.value);

let a=0;
let b=0;
const user = fetch('https://openlibrary.org/search.json?title={bookTitle}')
user.then((res) => res.json())
.then((allData) => {
    // console.log(allData.docs)

    allData.docs.map((data) => {
   b++;
    
    if(data.title && data.title.toLowerCase().includes(input.value.toLowerCase())){
     a++;
    let card = `<div class="card">
    <h2>${data.title}</h2>
    <p class="author"> ${data.author_name}</p>
    <p class="year"> ${data.first_publish_year}</p>
  </div>`


  cardContainer.innerHTML += card
    }
    else{
        if(a==0 &&b == allData.docs.length)
        result.style.display = 'block'
    }

  })
}).catch((err) => {
    console.log('Not found: 404')
})
})


  




