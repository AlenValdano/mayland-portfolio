console.log("Portfolio Mayland berhasil dimuat!");


// =============================
// Tombol Scroll ke Atas
// =============================

const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll", function () {

    if (document.documentElement.scrollTop > 200) {

        topBtn.style.display = "block";

    } else {

        topBtn.style.display = "none";

    }

});


topBtn.addEventListener("click", function () {

    window.scrollTo({

        top: 0,
        behavior: "smooth"

    });

});



// =============================
// Scroll Animation
// =============================

const hiddenElements = document.querySelectorAll("section");


const sectionObserver = new IntersectionObserver((entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.classList.add("show");

        }

    });


},{
    threshold:0.2
});


hiddenElements.forEach(section=>{

    section.classList.add("hidden");

    sectionObserver.observe(section);

});


// Hero langsung tampil

const hero = document.querySelector("#home");

if(hero){

    hero.classList.remove("hidden");

}




// =============================
// Typing Effect
// =============================

const text =
"IT Support • Helpdesk • Technical Support • Web Developer";


const typingText = document.getElementById("typing-text");


let index = 0;


function typingEffect(){

    if(index < text.length){

        typingText.textContent += text.charAt(index);

        index++;

        setTimeout(typingEffect,70);

    }

}


if(typingText){

    typingEffect();

}




// =============================
// Skill Progress Bar Animation
// =============================


const progressBars = document.querySelectorAll("#skill .progress-bar");


const skillObserver = new IntersectionObserver((entries)=>{


    entries.forEach(entry=>{


        if(entry.isIntersecting){


            entry.target.style.width =
            entry.target.getAttribute("data-width");


        }


    });


},{

    threshold:0.5

});



progressBars.forEach(bar=>{

    skillObserver.observe(bar);

});