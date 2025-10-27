import { greetings } from "./greetings.js"
import { coffeeMenu } from "./coffeeMenu.js"
import { coffeeCards } from "./coffeeCards.js"


const app = document.getElementById("app")
const navPfp = document.getElementById("nav-pfp")
const userGreet = document.getElementById("user-greet")
const coffeeCardsContainer = document.getElementById("coffeeCards-container")
const menuContainer = document.getElementById("menu-container")

navPfp.src = `https://api.dicebear.com/9.x/lorelei/svg?seed=${Math.random()}&r=${Date.now()}`
const random = greetings[Math.floor(Math.random() * greetings.length)]
userGreet.textContent = random

coffeeCards.forEach(card =>{
    const uuid = crypto.randomUUID()
       coffeeCardsContainer.innerHTML += `
       <div class="coffee-card">
            <img 
            class="coffeeCard-img"
            src="${card.img}" alt="${card.name}"
            data-id="${uuid}" data-type="card"
            >
            
            <p>${card.name}</p>
        </div>`
})


coffeeMenu.forEach(menu => {
    const uuid = crypto.randomUUID()
    menu.uuid = uuid
    menuContainer.innerHTML += `
    <div class="menu-cards">
        <span class="menuFlexOne">
            <img class="food-img" src="${menu.img}" alt="${menu.name}" data-id="${uuid}" data-type="image">
            <div class="foodDetails-flex">
                <span class="foodDetails-flexTwo">
                    <p class="food-ratings">
                    <i class="fa-solid fa-star"></i>
                    ${menu.ratings}
                    </p>
                    <p class="food-name">${menu.name}</p>
                    <p class="food-details">${menu.details}</p>
                    <p class="food-price">₹${menu.price}</p>
                </span>
            </div>
        </span>
        <span class="menuFlexTwo">
            <i class="fa-regular fa-heart heart" data-id="${uuid}" data-type="heart"></i>
            <i class="fa-solid fa-plus plus" data-id="${uuid}" data-type="plus"></i>
        </span>
    </div>
    `
})


document.addEventListener("click", (e)=>{
    if(e.target.dataset.type === "image"){
        const clickedID = e.target.dataset.id
        const selectedMenu = coffeeMenu.find(menu => menu.uuid === clickedID)
        if(!selectedMenu) return console.log("⚠️ No Coffee found for that ID")
        const {price, name, img, keyIngredient, initText, description, ratings} = selectedMenu

        app.innerHTML = `
             <div class="backLike-div">
        <div class="backLike-iconDiv">
            <a href="../index.html" style="color: antiquewhite;">
                <i class="fa-solid fa-angle-left"></i>
            </a>
        </div>
        <div class="backLike-iconDiv">
            <i class="fa-solid fa-heart" menuHeart></i>
        </div>
    </div>
    <div class="coffeeDetails-container">
        <div class="bg-img" style="background-image:url('${img}');"></div>
        <span class="details-flexOne">
            <div class="food-inDetails">
                <span class="ratings-flex">
                    <p class="menu-ratings">
                        <i class="fa-solid fa-star"></i> ${ratings} 
                    </p>
                    <p class="reviews">(250 reviews)</p>
                </span>

                        <p class="menu-name">${name}</p>
                        <p class="key-ingredient">${keyIngredient}</p>
            </div>
            <div>
                <p class="price-p">Price</p>
                <p class="menu-price">₹ ${price}</p>
            </div>
        </div>


        <div class="details-two">
            <input id="ch" type="checkbox">
            <p class="description-p">Description</p>
            <p class="initial-text">
                ${initText}...
            </p>
            <div class="content">
                <p class="full-text">
                    ${description}
                </p>
                <label for="ch">Show less</label>
            </div>
            <label for="ch">Read more</label>
        </div>

        <span class="dropdown-container">

            <div class="dropdown">
                <div class="select">
                    <span class="selected">Select Size</span>
                    <div class="caret"></div>
                </div>
                <ul class="menu">
                    <li>Small</li>
                    <li class="active">Medium</li>
                    <li>Large</li>
                </ul>
            </div>


            <div class="dropdown">
                <div class="select">
                    <span class="selected">Milk Type</span>
                    <div class="caret"></div>
                </div>
                <ul class="menu">
                    <li>Oat</li>
                    <li class="active">Cow</li>
                    <li>Almond</li>
                    <li>Goat</li>
                </ul>
            </div>

            <div class="dropdown">
                <div class="select">
                    <span class="selected">Sweetness</span>
                    <div class="caret"></div>
                </div>
                <ul class="menu">
                    <li>Less Sugar</li>
                    <li>Regular Sugar</li>
                    <li>Extra Sugar</li>
                    <li class="active">No Sugar</li>
                </ul>
            </div>

            <div class="dropdown">
                <div class="select">
                    <span class="selected">Temperature</span>
                    <div class="caret"></div>
                </div>
                <ul class="menu">
                    <li>Cold</li>
                    <li>Normal</li>
                    <li class="active">Hot</li>
                </ul>
            </div>
        </span>

        <div class="qntDiv-flex">
            <span>
                <div class="spanDivs">
                    <i class="fa-solid fa-minus"></i>
                </div>
                
                <p>1</p>
                <div class="spanDivs">
                    <i class="fa-solid fa-plus"></i>
                </div>
            </span>
            <button class="buyNow-btn">Buy Now</button>
        </div>



    </div>`
    const dropdowns = document.querySelectorAll('.dropdown')
    dropdowns.forEach(dropdown => {
        const select = dropdown.querySelector('.select')
        const caret = dropdown.querySelector('.caret')
        const menu = dropdown.querySelector('.menu')
        const options = dropdown.querySelectorAll('.menu li')
        const selected = dropdown.querySelector('.selected')
        
        select.addEventListener("click", ()=>{
            select.classList.toggle('select-clicked')
            caret.classList.toggle('caret-rotate')
            menu.classList.toggle('menu-open')
        })
        options.forEach(option => {
            option.addEventListener("click", () => {
                selected.innerText = option.innerText
                select.classList.remove('select-clicked')
                caret.classList.remove('caret-rotate')
                menu.classList.remove('menu-open')
                
                options.forEach(opt => opt.classList.remove('active'))
                option.classList.add('active')
            })
        })
    })
    } 
})







    // if(e.target.dataset.type === "heart"){
    //     console.log("❤️ clicked for ID:", e.target.dataset.id)
    // } 
    // if(e.target.dataset.type === "plus"){
    //     console.log("➕ clicked for ID:", e.target.dataset.id)
    // } 
    // if(e.target.dataset.type === "card"){
    //     console.log("🗂️ clicked:", e.target.dataset.id)
    // }