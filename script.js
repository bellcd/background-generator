var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient")
var wholeBackground = getComputedStyle(body);
var background = wholeBackground.background.slice(17, 78); // can this be more elegant?
var button = document.querySelector(".random");

function setGradient() {
  body.style.background =
    "linear-gradient(to right, "
     + color1.value
     + ", "
     + color2.value
     + ")";

     css.textContent = body.style.background + ";";
}

function setRandomGradient() {
  var randomColor1 = makeRandomColor();
  var randomColor2 = makeRandomColor();
  body.style.background =
    "linear-gradient(to right, "
     + randomColor1
     + ", "
     + randomColor2
     + ")";

     css.textContent = body.style.background + ";";

     color1.value = randomColor1;
     color2.value = randomColor2;
}

function makeRandomColor() {
  var hexCodeArr = [];
  var hexOrNum;
  var hex = ["a","b","c","d","e","f"];
  var hexCodeStr;

  for (var i = 0; i < 6; i++) {
    // decide to calculate number or letter
    hexOrNum = Math.floor((Math.random() * 2));
    if (hexOrNum === 0) {                              // if number
      hexCodeArr[i] = Math.floor((Math.random() * 10));
    } else {                                           // if letter
      var temp = (Math.floor((Math.random() * 6)));
      hexCodeArr[i] = hex[temp];
    }
  }

  hexCodeStr = hexCodeArr.join("");
  hexCodeStr = "#" + hexCodeStr;
  return hexCodeStr;
}

color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);
css.textContent = background;
button.addEventListener("click", setRandomGradient);
