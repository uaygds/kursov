const slide = document.querySelectorAll(".slider .slider-line .slide");
const sliderLine = document.querySelector(".slider-line");
let count = 0;
let width;
function init() {
    console.log("resize");
    width = document.querySelector(".slider").offsetWidth;
    sliderLine.style.width = width * slide.length + "px";
    slide.forEach((item)=>{
        item.style.width = width + "px";
        item.style.height = "auto";
    });
    rollSlider();
    console.log(width);
}
window.addEventListener("resize", init);
init();
document.querySelector(".slider-next").addEventListener("click", function() {
    count++;
    if (count >= slide.length) count = 0;
    rollSlider();
});
document.querySelector(".slider-prev").addEventListener("click", function() {
    count--;
    if (count < 0) count = slide.length - 1;
    rollSlider();
});
function rollSlider() {
    sliderLine.style.transform = "translate(-" + count * width + "px)";
}
document.querySelector(".label1").addEventListener("click", function() {
    count--;
    if (count <= 1) count = 0;
    rollSlider();
});
function rollSlider() {
    sliderLine.style.transform = "translate(-" + count * width + "px)";
}
document.querySelector(".label2").addEventListener("click", function() {
    count++;
    if (count >= 0) count = 1;
    if (count >= 2) count = 1;
    rollSlider();
});
document.querySelector(".label3").addEventListener("click", function() {
    count--;
    if (count < 2) count = 2;
    rollSlider();
});
document.getElementById("one").onclick = function() {
    document.getElementById("one").classList.add("active");
    document.getElementById("two").classList.remove("active");
    document.getElementById("three").classList.remove("active");
};
document.getElementById("two").onclick = function() {
    document.getElementById("two").classList.add("active");
    document.getElementById("one").classList.remove("active");
    document.getElementById("three").classList.remove("active");
};
document.getElementById("three").onclick = function() {
    document.getElementById("three").classList.add("active");
    document.getElementById("one").classList.remove("active");
    document.getElementById("two").classList.remove("active");
};
/* Конец адптивной гавно-карусели */ document.getElementById("burger").onclick = function() {
    document.getElementById("alt-nav").classList.add("alt-nav-active");
    document.getElementById("burger").classList.add("burger-close");
    document.getElementById("close").classList.add("close-active");
};
document.getElementById("close").onclick = function() {
    document.getElementById("burger").classList.remove("burger-close");
    document.getElementById("close").classList.remove("close-active");
    document.getElementById("alt-nav").classList.remove("alt-nav-active");
};
ymaps.ready(map);
function map() {
    var map = new ymaps.Map("map", {
        center: [
            53.92474385986169,
            27.509528075560763
        ],
        zoom: 12
    });
    var placemark = new ymaps.Placemark([
        53.92474385986169,
        27.509528075560763
    ], {});
    map.geoObjects.add(placemark);
}

//# sourceMappingURL=index.672d4772.js.map
