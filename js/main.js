let elSearchForm = document.querySelector(".search-form")
let elFilterForm = document.querySelector(".form-filter")
let elSearchInput = document.querySelector(".input-search")
let elCategoriSelect = document.querySelector(".categori-select")


var elList = document.querySelector(".list");

var fragment = new DocumentFragment();



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
  
})
//1///////////////////////

createel(pokemons)