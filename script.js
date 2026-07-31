console.log("Portfolio Mayland berhasil dimuat!");

window.onload = function () {
    alert("Selamat datang di Portfolio Mayland Valdano!");
}

// =============================
// Tombol Scroll ke Atas
// =============================

const topBtn = document.getElementById("topBtn");

window.onscroll = function () {

    if (document.documentElement.scrollTop > 200) {
        topBtn.style.display = "block";
    } else {
        topBtn.style.display = "none";
    }

}

topBtn.onclick = function () {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

}

// =============================
// Scroll Animation
// =============================

const hiddenElements = document.querySelectorAll("section");

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }

    });

}, {
    threshold: 0.2
});

hiddenElements.forEach(section => {

    section.classList.add("hidden");
    observer.observe(section);

});

// Hero langsung tampil
document.querySelector("#home").classList.remove("hidden");

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

typingEffect();

// =============================
// Progress Bar Animation
// =============================

const skillSection = document.querySelector("#skill");
const progressBars = document.querySelectorAll(".progress-bar");

let skillAnimated = false;

const skillObserver = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting && !skillAnimated) {

            progressBars.forEach(bar => {

                const width = bar.dataset.width;

                bar.style.width = width;

            });

            skillAnimated = true;

        }

    });

}, {
    threshold: 0.4
});

skillObserver.observe(skillSection);