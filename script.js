const slide = document.querySelectorAll(".slider .slider-line .slide");
const sliderLine = document.querySelector(".slider-line");
let count = 0;
let width;

function res() {
  console.log("resize");
  width = document.querySelector(".slider").offsetWidth;
  sliderLine.style.width = width * slide.length + "px";
  slide.forEach((item) => {
    item.style.width = width + "px";
    item.style.height = "auto";
  });
  rollSlider();
  console.log(width);
}

window.addEventListener("resize", res);
res();

document.querySelector(".slider-next").addEventListener("click", function () {
  count++;
  if (count >= slide.length) {
    count = 0;
  }
  rollSlider();
});

document.querySelector(".slider-prev").addEventListener("click", function () {
  count--;
  if (count < 0) {
    count = slide.length - 1;
  }
  rollSlider();
});

function rollSlider() {
  sliderLine.style.transform = "translate(-" + count * width + "px)";
}

document.querySelector(".label1").addEventListener("click", function () {
  count--;
  if (count <= 1) {
    count = 0;
  }
  rollSlider();
});

function rollSlider() {
  sliderLine.style.transform = "translate(-" + count * width + "px)";
}

document.querySelector(".label2").addEventListener("click", function () {
  count++;
  if (count >= 0) {
    count = 1;
  }
  if (count >= 2) {
    count = 1;
  }
  rollSlider();
});

document.querySelector(".label3").addEventListener("click", function () {
  count--;
  if (count < 2) {
    count = 2;
  }

  rollSlider();
});

/* ПЕРВАЯ КАРУСЕЛЬ ЗАКОНЧЕНА */

/* ВТОРАЯ КАРУСЕЛЬ НАЧАЛО */

const tableslide = document.querySelectorAll(
  ".table__slider .table__slider-line .table__slide"
);
const tablesliderLine = document.querySelector(".table__slider-line");
let tablecount = 0;
let tablewidth;

function tableres() {
  console.log("resize");
  tablewidth = document.querySelector(".table__slider").offsetWidth;
  tablesliderLine.style.width = tablewidth * tableslide.length + "px";
  tableslide.forEach((item) => {
    item.style.width = tablewidth + "px";
    item.style.height = "auto";
  });
  tablerollSlider();
  console.log(tablewidth);
}

window.addEventListener("resize", tableres);
tableres();

document.querySelector(".table__label1").addEventListener("click", function () {
  tablecount--;
  if (tablecount <= 1) {
    tablecount = 0;
  }
  tablerollSlider();
});

function tablerollSlider() {
  tablesliderLine.style.transform =
    "translate(-" + tablecount * tablewidth + "px)";
}

document.querySelector(".table__label2").addEventListener("click", function () {
  tablecount++;
  if (tablecount >= 0) {
    tablecount = 1;
  }
  if (tablecount >= 2) {
    tablecount = 1;
  }
  tablerollSlider();
});

document.querySelector(".table__label3").addEventListener("click", function () {
  tablecount--;
  if (tablecount < 2) {
    tablecount = 2;
  }

  tablerollSlider();
});

/* ВТОРАЯ КАРУСЕЛЬ ЗАКОНЧЕНА */

/*LABELS FOR SLIDE*/

document.getElementById("one").onclick = function () {
  document.getElementById("one").classList.add("active");
  document.getElementById("two").classList.remove("active");
  document.getElementById("three").classList.remove("active");
};

document.getElementById("two").onclick = function () {
  document.getElementById("two").classList.add("active");
  document.getElementById("one").classList.remove("active");
  document.getElementById("three").classList.remove("active");
};

document.getElementById("three").onclick = function () {
  document.getElementById("three").classList.add("active");
  document.getElementById("one").classList.remove("active");
  document.getElementById("two").classList.remove("active");
};

/*LABELS FOR TABLE__SLIDE*/

document.getElementById("table__one").onclick = function () {
  document.getElementById("table__one").classList.add("active");
  document.getElementById("table__two").classList.remove("active");
  document.getElementById("table__three").classList.remove("active");
};

document.getElementById("table__two").onclick = function () {
  document.getElementById("table__two").classList.add("active");
  document.getElementById("table__one").classList.remove("active");
  document.getElementById("table__three").classList.remove("active");
};

document.getElementById("table__three").onclick = function () {
  document.getElementById("table__three").classList.add("active");
  document.getElementById("table__one").classList.remove("active");
  document.getElementById("table__two").classList.remove("active");
};

/* Конец адптивных гавно-каруселей */

document.getElementById("burger").onclick = function () {
  /*При клике на бургер, раскрываем адаптивную шапку и показываем крестик и убираем бургер */
  document.getElementById("alt-nav").classList.add("alt-nav-active");
  document.getElementById("burger").classList.add("burger-close");
  document.getElementById("close").classList.add("close-active");
};

document.getElementById("close").onclick = function () {
  /*При клике на крестик, закрываем адаптивную шапку и возвращаем бургер */
  document.getElementById("burger").classList.remove("burger-close");
  document.getElementById("close").classList.remove("close-active");
  document.getElementById("alt-nav").classList.remove("alt-nav-active");
};

/* ЯНДЕКС КАРТЫ */

ymaps.ready(init);

function init() {
  var map = new ymaps.Map('map', {
    center: [53.92520574729037,27.508378347885095],
    zoom: 16,
  });

var myplacemark = new ymaps.Placemark([53.92520574729037,27.508378347885095], {

  });

  map.geoObjects.add(myplacemark);
}