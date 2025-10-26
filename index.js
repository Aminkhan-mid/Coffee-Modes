const navPfp = document.getElementById("nav-pfp")
const userGreet = document.getElementById("user-greet")
const coffeeCardsContainer = document.getElementById("coffeeCards-container")
const menuContainer = document.getElementById("menu-container")

const greetings =  [
    "👋 Hello",
    "🌞 Good Morning",
    "🌸 How's your day?",
    "💨 Breathe",
    "😊 Smile",
    "🌱 Life goes on",
    "☀️ Rise and shine!",
    "🤗 Hey there!",
    "💪 Keep going!",
    "🧘 Take a deep breath",
    "✨ You got this!",
    "🌈 Have a great day!",
    "🌻 Stay positive",
    "🏋️‍♂️ Keep pushing",
    "👋 Hello, friend!",
    "🐾 One step at a time",
    "🍃 Enjoy the little things",
    "💖 Be kind to yourself",
    "🌼 Good vibes only",
    "😁 Time to smile!",
    "🌟 Hey, superstar!",
    "😎 Stay awesome",
    "🌷 You are enough",
    "🔥 Make today count",
    "🌞 Keep shining",
    "💫 Believe in yourself",
    "🕊️ Take a moment to relax",
    "🥂 Cheers to today!",
    "🌅 Hello, sunshine!",
    "🌺 Positive energy only",
    "🚀 Keep moving forward",
    "💎 You are amazing",
    "😄 Stay happy",
    "🌻 Embrace the day",
    "🌈 Spread joy",
    "💛 Hello, beautiful soul",
    "🌾 Take it easy",
    "😁 Smile more today",
    "🌸 Enjoy the moment",
    "💪 Stay strong",
    "🌟 Hello there, champ!",
    "💨 Breathe and smile",
    "✨ Shine bright",
    "🙌 Keep your head up",
    "💖 Hello, lovely",
    "🌞 Be happy today",
    "🌷 Life is good",
    "🌌 Stay magical",
    "👑 Hello, warrior!"
  ]

const coffeeCards = [{
    img: "./imgs/cappuccino.png",
    name: "Cappuccino"
},
{
    img: "./imgs/americano.png",
    name: "Americano"
},
{
    img: "./imgs/espresso.png",
    name: "Espresso"
},
{
    img: "./imgs/macchiato.png",
    name: "Macchiato"
}]

const coffeeMenu = [
       {
        img: "./imgs/blackCoffee.avif",
        name: "Black Coffee",
        details: "with cream",
        ratings: 4.3,
        price: 100,
        isLiked: false,
        inCart: false
    },
    {
        img: "./imgs/hotChocolate.avif",
        name: "Hot Chocolate",
        details: "with milk",
        ratings: 4.9,
        price: 107,
        isLiked: false,
        inCart: false
    },
    {
        img: "./imgs/tiramisu.avif",
        name: "Tiramisu",
        details: "with cocoa",
        ratings: 4.2,
        price: 120,
        isLiked: false,
        inCart: false
    },
    {
        img: "./imgs/iceLatte.avif",
        name: "Ice Latte",
        details: "with ice",
        ratings: 4.6,
        price: 160,
        isLiked: false,
        inCart: false
    },
    {
        img: "./imgs/filterCoffee.avif",
        name: "Filter Coffee",
        details: "with machine",
        ratings: 5.0,
        price: 50,
        isLiked: false,
        inCart: false
    },
]

  
navPfp.src = `https://api.dicebear.com/9.x/lorelei/svg?seed=${Math.random()}&r=${Date.now()}`
const random = greetings[Math.floor(Math.random() * greetings.length)]
userGreet.textContent = random

coffeeCards.forEach(card =>{
       coffeeCardsContainer.innerHTML += `
       <div class="coffee-card">
            <img 
            class="coffeeCard-img"
            src="${card.img}" alt="${card.name}">
            
            <p>${card.name}</p>
        </div>`
})


coffeeMenu.forEach(menu => {
    menuContainer.innerHTML += `
    <div class="menu-cards">
        <span class="menuFlexOne">
            <img class="food-img" src="${menu.img}" alt="${menu.name}">
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
            <i class="fa-regular fa-heart"></i>
            <i class="fa-solid fa-plus"></i>
        </span>
    </div>
    `
})


