let offset = 0;
const sliderline = document.querySelector(".slider-line");
document.querySelector(".slider-next").addEventListener("click", function() {
    offset = offset + 688;
    if (offset > 1376) offset = 0;
    sliderline.style.left = -offset + "px";
});
document.querySelector(".slider-prev").addEventListener("click", function() {
    offset = offset - 688;
    if (offset < 0) offset = 1376;
    sliderline.style.left = -offset + "px";
});
document.querySelector(".first").addEventListener("click", function() {
    offset = 0;
    sliderline.style.left = offset + "px";
});
document.querySelector(".middle").addEventListener("click", function() {
    offset = 688;
    sliderline.style.left = -offset + "px";
});
document.querySelector(".last").addEventListener("click", function() {
    offset = 1376;
    sliderline.style.left = -offset + "px";
});
ymaps.ready(init);
function init() {
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
