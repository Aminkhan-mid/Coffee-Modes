const navPfp = document.getElementById("nav-pfp")
const userGreet = document.getElementById("user-greet")
const coffeeCardsContainer = document.getElementById("coffeeCards-container")
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