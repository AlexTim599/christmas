import "./assets/style/style.css";
import data from "./data";
import noUiSlider from "nouislider";
import "nouislider/dist/nouislider.css";
import wNumb from "wnumb";
import megaPihar from "./megaFunction";
import insertMyFavoritesCards from "./insertMyFavoritesCards";
// import selectTree from './changeTree'

console.log(
  " 1 часть.  Добрый день дорогой друг!\n Корректное отоброжение от 1500px и выше. \n Оценка: 175. \n 1- +10, \n 2- +10,\n Добавление игрушек в избранное +20,\n Сортировка +20, \n Фильтры в указанном диапазоне от и до +30 \n Фильтры по значению +30 \n Можно отфильтровать игрушки по нескольким фильтрам разного типа +20 \n Сброс фильтров +20 \n Сохранение настроек в local storage +10 \n Поиск +4\n"
  //    2 часть.  120 баллов"
);

console.log("2 часть.  120 баллов");

const btnStart = document.querySelector(".start_page");
const minePage = document.querySelector(".main_page");
const treeWindow = document.querySelector(".tree");
const navTree = document.querySelector(".nav-tree");
const navGoHome = document.querySelector(".nav-home");
const navBals = document.querySelector(".nav-bals");
const navbar = document.querySelector(".my-nav");
const boll = document.querySelector(".bolls");
const pear = document.querySelector(".pear");
const cone = document.querySelector(".cone");
const snowflake = document.querySelector(".snowflake");
const bear = document.querySelector(".bear");
const white = document.querySelector(".white");
const yellow = document.querySelector(".yellow");
const red = document.querySelector(".red");
const blue = document.querySelector(".blue");
const green = document.querySelector(".green");
const bigest = document.querySelector(".bigest");
const medium = document.querySelector(".medium");
const small = document.querySelector(".small");
const lovelyCheck = document.getElementById("flexCheckDefault");
const sortBy = document.querySelector(".sort-by");
const resetFilters = document.querySelector(".reset-filters");
const changeTree = document.querySelectorAll(".select-tree-col");
const treeCenter = document.querySelector(".tree-big-center");
const chengeFone = document.querySelectorAll(".select-fone-col");
const centerFone = document.querySelector(".center-col-fone");
const centerCol = document.querySelector(".center-col");
const audio = document.querySelector(".audio");
const myFavoritesContainer = document.querySelector(".row-lovely");
const slider1 = document.getElementById("slider1");
const slider2 = document.getElementById("slider2");

megaPihar(data);
insertMyFavoritesCards(myFavoritesContainer, data);

const music = new Audio();
music.src = "./assets/audio/audio.mp3";

audio.addEventListener("click", (element) => {
  element.currentTarget.classList.toggle("play");

  if (element.currentTarget.classList.contains("play")) {
    music.play();
  } else {
    music.pause();
  }
});

sortBy.addEventListener("change", function () {
  let filterStorage = JSON.parse(localStorage.getItem("filterStorage"));
  if (filterStorage === null) {
    localStorage.setItem(
      "filterStorage",
      JSON.stringify({ sortBy: this.value })
    );
  } else {
    filterStorage = {
      ...filterStorage,
      sortBy: this.value,
    };
    localStorage.setItem("filterStorage", JSON.stringify(filterStorage));
  }
  megaPihar(data);
});

let myFavorite = localStorage.getItem("myFavorite");
if (myFavorite === null) {
  const favoriteCount = data.filter((item) => item.favorite === true);
  localStorage.setItem("myFavorite", favoriteCount.length);
}

lovelyCheck.addEventListener("change", function () {
  let filterStorage = JSON.parse(localStorage.getItem("filterStorage"));
  if (filterStorage === null) {
    localStorage.setItem(
      "filterStorage",
      JSON.stringify({ favorite: this.checked ? true : null })
    );
  } else {
    filterStorage = {
      ...filterStorage,
      favorite: this.checked ? true : null,
    };
    localStorage.setItem("filterStorage", JSON.stringify(filterStorage));
  }
  megaPihar(data);
});

noUiSlider.create(slider1, {
  start: [1, 12],
  connect: true,
  range: {
    min: 1,
    max: 12,
  },
  step: 1,
  behaviour: "tap-drag",
  tooltips: [wNumb({ decimals: 0 }), wNumb({ decimals: 0 })],
});

noUiSlider.create(slider2, {
  start: [1940, 2020],
  connect: true,
  range: {
    min: 1940,
    max: 2020,
  },
  step: 10,
  behaviour: "tap-drag",
  tooltips: [wNumb({ decimals: 0 }), wNumb({ decimals: 0 })],
}),
  resetFilters.addEventListener("click", () => {
    let filterStorage = JSON.parse(localStorage.getItem("filterStorage"));
    filterStorage = {
      ...filterStorage.favorite,
    };
    localStorage.setItem("filterStorage", JSON.stringify(filterStorage));

    slider1.noUiSlider.reset();

    slider2.noUiSlider.reset();

    megaPihar(data);
  });

slider1.noUiSlider.on("set", function (values) {
  let filterStorage = JSON.parse(localStorage.getItem("filterStorage"));
  if (filterStorage === null) {
    localStorage.setItem(
      "filterStorage",
      JSON.stringify({ filterByCount: values })
    );
  } else {
    filterStorage = {
      ...filterStorage,
      filterByCount: values,
    };
    localStorage.setItem("filterStorage", JSON.stringify(filterStorage));
  }
  megaPihar(data);
});

slider2.noUiSlider.on("set", function (values) {
  let filterStorage = JSON.parse(localStorage.getItem("filterStorage"));
  if (filterStorage === null) {
    localStorage.setItem(
      "filterStorage",
      JSON.stringify({ filterByYear: values })
    );
  } else {
    filterStorage = {
      ...filterStorage,
      filterByYear: values,
    };
    localStorage.setItem("filterStorage", JSON.stringify(filterStorage));
  }
  megaPihar(data);
});

boll.addEventListener("click", (e) => {
  const isFilterChecked = e.currentTarget.classList.toggle("checked");
  let filterStorage = JSON.parse(localStorage.getItem("filterStorage"));
  if (filterStorage === null) {
    localStorage.setItem(
      "filterStorage",
      JSON.stringify({ shape: isFilterChecked ? { boll: "шар" } : {} })
    );
  } else {
    filterStorage = {
      ...filterStorage,
      shape: isFilterChecked
        ? { ...filterStorage.shape, boll: "шар" }
        : { ...filterStorage.shape, boll: null },
    };
    localStorage.setItem("filterStorage", JSON.stringify(filterStorage));
  }
  megaPihar(data);
});

cone.addEventListener("click", (e) => {
  const isFilterChecked = e.currentTarget.classList.toggle("checked");
  let filterStorage = JSON.parse(localStorage.getItem("filterStorage"));
  if (filterStorage === null) {
    localStorage.setItem(
      "filterStorage",
      JSON.stringify({ shape: isFilterChecked ? { cone: "шишка" } : {} })
    );
  } else {
    filterStorage = {
      ...filterStorage,
      shape: isFilterChecked
        ? { ...filterStorage.shape, cone: "шишка" }
        : { ...filterStorage.shape, cone: null },
    };
    localStorage.setItem("filterStorage", JSON.stringify(filterStorage));
  }
  megaPihar(data);
});

snowflake.addEventListener("click", (e) => {
  const isFilterChecked = e.currentTarget.classList.toggle("checked");

  let filterStorage = JSON.parse(localStorage.getItem("filterStorage"));

  if (filterStorage === null) {
    localStorage.setItem(
      "filterStorage",
      JSON.stringify({
        shape: isFilterChecked ? { snowflake: "снежинка" } : {},
      })
    );
  } else {
    filterStorage = {
      ...filterStorage,
      shape: isFilterChecked
        ? { ...filterStorage.shape, snowflake: "снежинка" }
        : { ...filterStorage.shape, snowflake: null },
    };
    localStorage.setItem("filterStorage", JSON.stringify(filterStorage));
  }
  megaPihar(data);
});

bear.addEventListener("click", (e) => {
  const isFilterChecked = e.currentTarget.classList.toggle("checked");

  let filterStorage = JSON.parse(localStorage.getItem("filterStorage"));

  if (filterStorage === null) {
    localStorage.setItem(
      "filterStorage",
      JSON.stringify({ shape: isFilterChecked ? { bear: "фигурка" } : {} })
    );
  } else {
    filterStorage = {
      ...filterStorage,
      shape: isFilterChecked
        ? { ...filterStorage.shape, bear: "фигурка" }
        : { ...filterStorage.shape, bear: null },
    };
    localStorage.setItem("filterStorage", JSON.stringify(filterStorage));
  }
  megaPihar(data);
});

pear.addEventListener("click", (e) => {
  const isFilterChecked = e.currentTarget.classList.toggle("checked");

  let filterStorage = JSON.parse(localStorage.getItem("filterStorage"));

  if (filterStorage === null) {
    localStorage.setItem(
      "filterStorage",
      JSON.stringify({ shape: isFilterChecked ? { pear: "колокольчик" } : {} })
    );
  } else {
    filterStorage = {
      ...filterStorage,
      shape: isFilterChecked
        ? { ...filterStorage.shape, pear: "колокольчик" }
        : { ...filterStorage.shape, pear: null },
    };
    localStorage.setItem("filterStorage", JSON.stringify(filterStorage));
  }
  megaPihar(data);
});

white.addEventListener("click", (e) => {
  const isFilterChecked = e.currentTarget.classList.toggle("checked");

  let filterStorage = JSON.parse(localStorage.getItem("filterStorage"));

  if (filterStorage === null) {
    localStorage.setItem(
      "filterStorage",
      JSON.stringify({ color: isFilterChecked ? { white: "белый" } : {} })
    );
  } else {
    filterStorage = {
      ...filterStorage,
      color: isFilterChecked
        ? { ...filterStorage.color, white: "белый" }
        : { ...filterStorage.color, white: null },
    };
    localStorage.setItem("filterStorage", JSON.stringify(filterStorage));
  }
  megaPihar(data);
});

yellow.addEventListener("click", (e) => {
  const isFilterChecked = e.currentTarget.classList.toggle("checked");

  let filterStorage = JSON.parse(localStorage.getItem("filterStorage"));

  if (filterStorage === null) {
    localStorage.setItem(
      "filterStorage",
      JSON.stringify({ color: isFilterChecked ? { yellow: "желтый" } : {} })
    );
  } else {
    filterStorage = {
      ...filterStorage,
      color: isFilterChecked
        ? { ...filterStorage.color, yellow: "желтый" }
        : { ...filterStorage.color, yellow: null },
    };
    localStorage.setItem("filterStorage", JSON.stringify(filterStorage));
  }
  megaPihar(data);
});

red.addEventListener("click", (e) => {
  const isFilterChecked = e.currentTarget.classList.toggle("checked");

  let filterStorage = JSON.parse(localStorage.getItem("filterStorage"));

  if (filterStorage === null) {
    localStorage.setItem(
      "filterStorage",
      JSON.stringify({ color: isFilterChecked ? { red: "красный" } : {} })
    );
  } else {
    filterStorage = {
      ...filterStorage,
      color: isFilterChecked
        ? { ...filterStorage.color, red: "красный" }
        : { ...filterStorage.color, red: null },
    };
    localStorage.setItem("filterStorage", JSON.stringify(filterStorage));
  }
  megaPihar(data);
});

blue.addEventListener("click", (e) => {
  const isFilterChecked = e.currentTarget.classList.toggle("checked");

  let filterStorage = JSON.parse(localStorage.getItem("filterStorage"));

  if (filterStorage === null) {
    localStorage.setItem(
      "filterStorage",
      JSON.stringify({ color: isFilterChecked ? { blue: "синий" } : {} })
    );
  } else {
    filterStorage = {
      ...filterStorage,
      color: isFilterChecked
        ? { ...filterStorage.color, blue: "синий" }
        : { ...filterStorage.color, blue: null },
    };
    localStorage.setItem("filterStorage", JSON.stringify(filterStorage));
  }
  megaPihar(data);
});

green.addEventListener("click", (e) => {
  const isFilterChecked = e.currentTarget.classList.toggle("checked");

  let filterStorage = JSON.parse(localStorage.getItem("filterStorage"));

  if (filterStorage === null) {
    localStorage.setItem(
      "filterStorage",
      JSON.stringify({ color: isFilterChecked ? { green: "зелёный" } : {} })
    );
  } else {
    filterStorage = {
      ...filterStorage,
      color: isFilterChecked
        ? { ...filterStorage.color, green: "зелёный" }
        : { ...filterStorage.color, green: null },
    };
    localStorage.setItem("filterStorage", JSON.stringify(filterStorage));
  }
  megaPihar(data);
});

bigest.addEventListener("click", (e) => {
  const isFilterChecked = e.currentTarget.classList.toggle("checked");

  let filterStorage = JSON.parse(localStorage.getItem("filterStorage"));

  if (filterStorage === null) {
    localStorage.setItem(
      "filterStorage",
      JSON.stringify({ size: isFilterChecked ? { bigest: "большой" } : {} })
    );
  } else {
    filterStorage = {
      ...filterStorage,
      size: isFilterChecked
        ? { ...filterStorage.size, bigest: "большой" }
        : { ...filterStorage.size, bigest: null },
    };
    localStorage.setItem("filterStorage", JSON.stringify(filterStorage));
  }
  megaPihar(data);
});

medium.addEventListener("click", (e) => {
  const isFilterChecked = e.currentTarget.classList.toggle("checked");

  let filterStorage = JSON.parse(localStorage.getItem("filterStorage"));

  if (filterStorage === null) {
    localStorage.setItem(
      "filterStorage",
      JSON.stringify({ size: isFilterChecked ? { medium: "средний" } : {} })
    );
  } else {
    filterStorage = {
      ...filterStorage,
      size: isFilterChecked
        ? { ...filterStorage.size, medium: "средний" }
        : { ...filterStorage.size, medium: null },
    };
    localStorage.setItem("filterStorage", JSON.stringify(filterStorage));
  }
  megaPihar(data);
});

small.addEventListener("click", (e) => {
  const isFilterChecked = e.currentTarget.classList.toggle("checked");

  let filterStorage = JSON.parse(localStorage.getItem("filterStorage"));

  if (filterStorage === null) {
    localStorage.setItem(
      "filterStorage",
      JSON.stringify({ size: isFilterChecked ? { small: "малый" } : {} })
    );
  } else {
    filterStorage = {
      ...filterStorage,
      size: isFilterChecked
        ? { ...filterStorage.size, small: "малый" }
        : { ...filterStorage.size, small: null },
    };
    localStorage.setItem("filterStorage", JSON.stringify(filterStorage));
  }
  megaPihar(data);
});

changeTree.forEach((element) => {
  element.addEventListener("click", (element) => {
    const numTree = element.currentTarget.dataset.tree;
    treeCenter.src = `./assets/tree/${numTree}.png`;
  });
});

chengeFone.forEach((element) => {
  element.addEventListener("click", (element) => {
    const numFone = element.currentTarget.dataset.fone;
    const className = `col${numFone}-fone`;
    centerCol.classList.remove(
      "col1-fone",
      "col2-fone",
      "col3-fone",
      "col4-fone",
      "col5-fone",
      "col6-fone",
      "col7-fone",
      "col8-fone",
      "col9-fone",
      "col10-fone"
    );
    centerCol.classList.add(className);
  });
});

btnStart.addEventListener("click", () => {
  minePage.classList.remove("hide");
  navbar.classList.remove("hide");
  btnStart.classList.add("hide");
});

navGoHome.addEventListener("click", () => {
  btnStart.classList.remove("hide");
  minePage.classList.add("hide");
  navbar.classList.add("hide");
  treeWindow.classList.add("hide");
});

navTree.addEventListener("click", () => {
  treeWindow.classList.remove("hide");
  minePage.classList.add("hide");
});

navBals.addEventListener("click", () => {
  treeWindow.classList.add("hide");
  minePage.classList.remove("hide");
});

// снегопад
// var canvas = document.getElementById('degkacording'),
//     interv = 30,
//     Snowflake = function(h) {
//         this.width = canvas.width;
//         this.height = canvas.height;
//         this.vxCommon = .004;
//         this.vyCommon = .0226;
//         this.r = h.r;
//         this.parallax = h.parallax;
//         this.x = h.x;
//         this.y = h.y;
//         this.vx = h.vx;
//         this.vy = h.vy;
//         this.vMelt = .993;
//     };
// Snowflake.prototype = {
//     rMin: 1.8,
//     rMax: 5,
//     plain: .88 * canvas.height //level of plain when flakes are stops
// };
// var rand = function(n, shift) { return (shift != null ? shift : -n / 2) + n * Math.random(); },
//     randRad, snowflakes = Array.apply(0, Array(120)).map(function() {
//         return new Snowflake({
//             r: randRad = rand(Snowflake.prototype.rMax, Snowflake.prototype.rMin),
//             parallax: randRad * .005,
//             x: rand(canvas.width - 2 * randRad, randRad),
//             y: rand(canvas.height - 2 * randRad, randRad - (canvas.height - Snowflake.prototype.plain)),
//             vx: rand(.02),
//             vy: rand(.02)
//         });
//     }),
//     cont = degkacording.getContext('2d'),
//     noStopMotion = 1,
//     count = 0;
// cont.fillStyle = 'rgba(170, 177, 205, 0.29)';
// cont.fillRect(0, 0, degkacording.width, canvas.height);
// cont.fillStyle = 'rgba(185, 196, 207, 0.78)';

// var startMotion = function(dt2, base_image) { //render all
//     var now = +new Date();
//     cont.clearRect(0, 0, canvas.width, canvas.height);

//     snowflakes.forEach(function(S, i, arr) { //render flake
//         S.date = S.date || now;
//         var dt = dt2 || now - S.date;
//         if (!(S.y > S.plain - 2 * S.r - 2 + (S.r - S.rMin) * (S.height - S.plain) / (S.rMax - S.rMin))) {
//             S.x += dt * (S.vx + S.vxCommon + S.parallax);
//             S.x -= S.width * (S.x / S.width | 0);
//             S.y += dt * (S.vy + S.vyCommon + S.parallax);
//             S.y -= S.height * (S.y / S.height | 0);
//             S.vx = (S.vx + rand(.002)) * .999;
//             S.vy = (S.vy + rand(.002)) * .999;
//             S.r -= .003
//         } else {
//             S.r = S.r * S.vMelt - .003;
//         }
//         if (S.r > 0) {
//             cont.beginPath();
//             cont.arc(S.x, S.y, S.r, 0, 2 * Math.PI, !1);
//             cont.fill();
//         } else {
//             S.r = rand(S.rMax, S.rMin);
//             S.y = 0;
//         }
//         //console.log(S.vx)
//         S.date = now;
//         count++;
//     });
//     noStopMotion && setTimeout(startMotion, interv);
// };
// setTimeout(function() { console.log('count', count / 10); }, 10000);
// document.querySelector('button').addEventListener('click', function() { if (noStopMotion = noStopMotion ? 0 : 1) startMotion(3 * interv) }, !1);
// startMotion(null);

// снегопад

// скрипт игрушек

// скрипт игрушек
