let gedung1 = document.getElementById('img1');
let gedung2 = document.getElementById('img2');
let gedung3 = document.getElementById('img3');
let gedung4 = document.getElementById('img4');
let gedung5 = document.getElementById('img5');
let hp = document.getElementById('img01');
let laptop = document.getElementById('img02');
let pesawat = document.getElementById('img03');
let kertas = document.getElementById('img04');
let human6 = document.getElementById('img6');
let human7 = document.getElementById('img7');
let human8 = document.getElementById('img8');
let title = document.getElementById('.title')

document.addEventListener('scroll', function () {
    let value = window.scrollY;
    gedung1.style.transform = `translateY(${value * 0.5}px)`;
    gedung2.style.transform = `translateY(${value * 0.3}px)`;
    gedung3.style.transform = `translateY(${value * 0.7}px)`;
    gedung4.style.transform = `translateY(${value * 0.2}px)`;
    gedung5.style.transform = `translateY(${value * 0.1}px)`;
    hp.style.transform = `translateY(${value * 0.5}px)`;
    laptop.style.transform = `translateX(${-value * 0.5}px)`, `translateY(${-value * 0.4}px)`;
    pesawat.style.transform = `translateX(${-value * 0.2}px)`;
    kertas.style.transform = `translateX(${value * 0.5}px)`;
    human6.style.transform = `translateY(${value * 0.6}px)`;
    human7.style.transform = `translateY(${value * 0.8}px)`;
    human8.style.transform = `translateY(${value * 0.3}px)`;
    title.style.transform = `translateY(${value * 0.7}px)`;


});

let prevScrollpos = window.scrollY;

window.onscroll = function () {
    let currentScrollPos = window.scrollY;

    if (prevScrollpos > currentScrollPos) {
        document.getElementById("nav").style.top = "0";
    } else {
        document.getElementById("nav").style.top = "-100px"; // Sesuaikan dengan tinggi navigasi Anda
    }

    prevScrollpos = currentScrollPos;
};
