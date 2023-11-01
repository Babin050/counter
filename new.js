
const reviews = [
{
    id:1,
    hero:"MAHATHMA GANDHIJI",
    img:"https://e1.pxfuel.com/desktop-wallpaper/627/306/desktop-wallpaper-mahatma-gandhi-png-mahatma-gandhi-thumbnail.jpg",
    txt:"Strength does not come from physical capacity.it comes from an indomitable will.",
},
{
    id:2,
    hero:"JAWAHARLAL NEHRU",
    img:"https://www.seekpng.com/png/detail/794-7941152_thumb-image-full-size-jawaharlal-nehru.png",
    txt:"The children of today will make the india of tomarrow.",
},
{
    id:3,
    hero:"BHAGAT SINGH",
    img:"https://upload.wikimedia.org/wikipedia/commons/5/54/Bhagat_Singh_1929.jpg",
    txt:"I am a man and all that affects mankind concerns me",
},
{
    id:4,
    hero:"SUBHASH CHANDRA BOSE",
    img:"https://rukminim2.flixcart.com/image/850/1000/l1pc3gw0/poster/q/u/z/small-subhash-chandra-bose-photopaper-print-poster-subhash-original-imagd7zgcsh34xcz.jpeg?q=20",
    txt:"A true solider needs both military and spiritual training",
}
];

const condainer=document.querySelector(".img");
const author =document.querySelector(".auther");
const info =document.querySelector(".info");


const leftarrow = document.querySelector(".left-arrow");
const rightarrow = document.querySelector(".right-arrow");
const btn = document.querySelector(".btn");


let initial = 0;


// initial item

window.addEventListener("DOMContentLoaded",function(){
    const data = reviews[initial];
    condainer.src=data.img
    author .textContent = data.hero;
 
    info.textContent = data.txt;
});

function change(number) {
    const demo = reviews[number];
    condainer.src=demo.img
    author .textContent = demo.hero
  
    info.textContent = demo.txt;
}

// show 
leftarrow.addEventListener("click",()=>{
    initial++
    change(initial);

});

rightarrow.addEventListener("click",()=>{
    initial--
    change(initial);

});

btn.addEventListener("click",()=>{
    initial = Math.floor(Math.random()*reviews.length);
    change(initial);
});   


