const SUPERHERO_TOKEN='1131038844523608'
const BASE_URL=`https://superheroapi.com/api.php/${SUPERHERO_TOKEN}`
const getSuperHero=(id,name)=>{
  fetch(`${BASE_URL}/${id}`)
  .then(response=>response.json())
    prompt("Your ")
  .then(json=>console.log(json))
}
getSuperHero(20)

const img='https://www.superherodb.com/pictures2/portraits/10/100/10476.jpg'

document.querySelector('body').innerHTML +=`<img src=${img} heihg=200 width=200>`