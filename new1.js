
const reviews = [
    {
        id:1,
        hero:" NEYMAR",
        pic:"https://e0.365dm.com/19/09/2048x1152/skysports-neymar-brazil-barcelona_4766505.jpg",
        txt:"There is no pressure when you are making a dream come true.",
    },
    {
        id:2,
        hero:"LIONEL MESSI",
        pic:"https://pbs.twimg.com/media/Fvr2bgbaAAA_PSO.jpg",
        txt:"You have to fight to reach your dream you have to sacrifice and work hard for it.",
    },
    {
        id:3,
        hero:"LUIS SUAREZ",
    pic:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ14R4oYMo7mWvQTIbh6iaoLzkRTAmAnclN3Zb6iTENeoZpEMAQP3gyp0SBLk13wSMBgjs&usqp=CAU",
        txt:"Thats the mentality-dont just play it win it.",
    },
    {
        id:4,
        hero:"CRISTIANO RONALDO",
        pic:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAdpxvypqWqpv4n9XXCQxwgvVZLBI1K8x-SQ&usqp=CAU",
        txt:"Talend without working hard is nothing",
    }
    ];

    const person_img = document.querySelector(".personimg");
    const auther = document.querySelector(".auther");
    const info = document.querySelector(".info");

    const prevbtn = document.querySelector(".prevbtn");
    const nextbtn = document.querySelector(".nextbtn");
    const randombtn = document.querySelector(".randombtn");

    let currentItem = 0;

    window.addEventListener("DOMContentLoaded",function(){
        const data = reviews[currentItem];
        person.src=data.pic;
        auther.textContent=data.hero;
        info.textContent=data.txt;
    });

    function showPerson(person) {
        let data = reviews[person];
        person_img.src=data.pic
        auther.textContent=data.hero;
        info.textContent=data.txt;
    }

    prevbtn.addEventListener("click",()=>{
        currentItem++;
      
        console.log(currentItem);
        showPerson(currentItem);
    });

    nextbtn.addEventListener("click",()=>{
        currentItem--;
        showPerson(currentItem);
    });

    randombtn.addEventListener("click",()=>{
        currentItem = Math.floor(Math.random()*reviews.length)
        console.log(currentItem);
        showPerson(currentItem);
    });

    


    
