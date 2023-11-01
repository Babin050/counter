
const MoviesReviews = [
    {
        id:1,
        hero:" RDX",
        pic:"https://mir-s3-cdn-cf.behance.net/project_modules/1400_opt_1/ffe165173771815.64f16fa580274.jpg",
        txt:"BLOKBUSTER MOVIE",
    },
    {
        id:2,
        hero:"2018 EVERYONE IS A HERO",
        pic:"https://img.jagrantv.com/webstories/ws4345/1685620235-2.jpg",
        txt:"BOXOFFICE MOVIE",
    },
    {
        id:3,
        hero:"ROMANCHAM",
        pic:"https://images.newindianexpress.com/uploads/user/ckeditor_images/article/2023/2/14/JERG.jpg",
        txt:" BOXOFFICE MOVIE",
    },
    {
        id:4,
        hero:"KANNUR SQUAD",
        pic:"https://filmymanch.com/wp-content/uploads/2023/09/Kannur-Squad.jpg",
        txt:"BLOKBUSTER MOVIE",
    }
    ];

    let movie_img = document.querySelector(".movie_img");
    let movie_name = document.querySelector(".movie_name");
    let feadback = document.querySelector(".feadback");

    let prevbtn = document.querySelector(".prevbtn");
    let nextbtn = document.querySelector(".nextbtn");
    let randombtn = document.querySelector(".randombtn");

    let movieItem = 0;


    window.addEventListener("DOMContentLoaded",function(){
        let data =MoviesReviews[movieItem];
        movie_img.src=data.pic;
        movie_name.textContent=data.hero;
        feadback.textContent=data.txt;
    });

    function change(movie) {
        let data=MoviesReviews[movie];
        movie_img.src=data.pic;
        movie_name.textContent=data.hero;
        feadback.textContent=data.txt;
    } 

    prevbtn.addEventListener("click",()=>{
        movieItem++
        if(i)
        change(movieItem);
     });

     nextbtn.addEventListener("click",()=>{
        movieItem--
        change(movieItem);
     });

     randombtn.addEventListener("click",()=>{
        movieItem = Math.floor(Math.random()*MoviesReviews.length)
        change(movieItem);


     })
