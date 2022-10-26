let elSearchForm = document.querySelector(".search-form")
let elFilterForm = document.querySelector(".form-filter")
let elSearchInput = document.querySelector(".input-search")
let elallSelect = document.querySelector(".all-select")
let elCategoriSelect = document.querySelector(".categori-select")


var elList = document.querySelector(".list");

var fragment = new DocumentFragment();

let cendy = pokemons.filter(item => item.candy_count)

var elTemplate = document.querySelector(".pokemons-template").content;

function createel(arr,ress ="") {
  elList.innerHTML = ""
 arr.forEach(pokemon => {
  


    var cloneTemplate = elTemplate.cloneNode(true);
  if (ress.source !== "(?:)",ress) {
    cloneTemplate.querySelector(".item-title").innerHTML = pokemon.name.replace(ress,
      `<mark class="p-0 bg-info text-white">${ress.source}</mark>`);
  } else {
    cloneTemplate.querySelector(".item-title").textContent = pokemon.name;
   }

 
       cloneTemplate.querySelector(".item-category").textContent = pokemon.weaknesses.join(", ");

  cloneTemplate.querySelector(".item-num").textContent = pokemon.num
    cloneTemplate.querySelector(".item");
    cloneTemplate.querySelector(".item-img").src = pokemon.img;
    cloneTemplate.querySelector(".item-time").textContent = pokemon.spawn_time;
    cloneTemplate.querySelector(".weight").textContent = pokemon.weight;
    cloneTemplate.querySelector(".height").textContent = pokemon.height;;
    cloneTemplate.querySelector(".cendy").textContent =  pokemon.candy_count;

    cloneTemplate.querySelector(".item-time").classList.add("badge", "bg-info");
  
    cloneTemplate.querySelector(".item-time").setAttribute("datetime", `2022-10-03 ${pokemon.spawn_time}`);

    var newItem = document.createElement("li");
    var newImg = document.createElement("img");
    var newTitle = document.createElement("h3");  
    var newNum = document.createElement("span");
    
    
  
    newItem.classList.add("col-3", "p-2", "bg-success");
  
    newImg.setAttribute("src", pokemon.img);
  
    newTitle.textContent = pokemon.name;
    newNum.textContent = pokemon.num;
  
    newItem.appendChild(newImg);
    newItem.appendChild(newTitle);
    newItem.appendChild(newNum);
  
    fragment.appendChild(cloneTemplate);
    
  }); 
  
  elList.appendChild(fragment)
}

//? ///////////////////////////////////////////////
elSearchForm.addEventListener("submit", (evt) => {
  evt.preventDefault()
  const elSearch = new RegExp(elSearchInput.value.trim(), "gi")
  const filterArr = pokemons.filter(item => item.name.match(elSearch))
  if (filterArr.length > 0 ) {
    createel(filterArr,elSearch)

  } else {
    alert("bunday malumot mavjud ekmas")
  }
})
let categoriArr = []
function category() {
  pokemons.forEach(item => {
    item.weaknesses.forEach(itm => {

      if (!categoriArr.includes(itm)) {
        categoriArr.push(itm)
      }
    })
  })
}
category()

function createSelectOption() {
  categoriArr.forEach(item => {
    let option = document.createElement("option")

    option.textContent = item
    option.value = item
    elCategoriSelect.appendChild(option)
  })
}
createSelectOption()
elFilterForm.addEventListener("submit", function (evt) {
  evt.preventDefault()
 
  let searchValue = elCategoriSelect.value
  if (searchValue == "all") {
    createel(pokemons)
  } else {
    let categoriFilter = pokemons.filter(item => {
      return item.weaknesses.includes(searchValue)
    })
    createel(categoriFilter)
  }
if (elallSelect.value == "az") {
  az()
} else if (elallSelect.value == "za") {
  za()
} else if (elallSelect.value == "kg12") {
  kg12() 
}else if (elallSelect.value == "kg21") {
  kg21() 
}else if (elallSelect.value == "m12") {
  m12() 
}else if (elallSelect.value == "m21") {
  m21() 
}else if (elallSelect.value == "cendy21") {
  count12()
}else if (elallSelect.value == "cendy12") {
  count21()
}
})
//1///////////////////////

function az() {
  pokemons.sort((a, b) => a.name.charCodeAt(0) - b.name.charCodeAt(0)
  )
}
function za() {
  pokemons.sort((a, b) => b.name.charCodeAt(0) - a.name.charCodeAt(0)
  )
}
  
function kg12() {
  pokemons.sort((a, b) => Number(b.weight.split(" ")[0]) - Number(a.weight.split(" ")[0])
  )
}
function kg21() {
  pokemons.sort((a, b) => Number(a.weight.split(" ")[0]) - Number(b.weight.split(" ")[0])
  )
}
  
function m12() {
  pokemons.sort((a, b) => Number(b.height.split(" ")[0]) - Number(a.height.split(" ")[0])
  )
}
function m21() {
  pokemons.sort((a, b) => Number(a.height.split(" ")[0]) - Number(b.height.split(" ")[0])
  )
}

function count12() {

  cendy.sort((a, b) => {
    let aa
    let bb
    if (b.candy_count != undefined) {aa = b.candy_count }
    if (a.candy_count != undefined) { bb = a.candy_count }
    return bb - aa
  })
  createel(cendy)
}
function count21() {
 
  cendy.sort((a, b) => {
    let aa
    let bb
    if (b.candy_count != undefined) {aa = b.candy_count }
    if (a.candy_count != undefined) { bb = a.candy_count }
    return aa - bb
  })
  createel(cendy)
}

createel(pokemons)