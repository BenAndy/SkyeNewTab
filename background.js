// Copyright Benjamin (c) All rights reserved - 2016

console.log("background.js loaded.");

var backgroundNumber = Array(41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60);
document.getElementById("ImageUpdateDate").innerHTML = "Sunday, 14<sup>th</sup> February 2016";
// NOTE Maximum of 20 backgrounds NOTE Add number onto end for new images, delete lowest number (This is just a weird developer note)
var randBack = function() {
  return backgroundNumber[Math.floor(Math.random() * backgroundNumber.length)];
};

// backgroundChange() method
var currentBackgroundID;
var backgroundChange = function(id) {
  if (id === "random") {
    currentBackgroundID = randBack();
    document.getElementById("header").style.backgroundImage = "url('content/background/" + currentBackgroundID + ".jpg')";
  } else {
    switch(id) {
      case backgroundNumber[0]:
        currentBackgroundID = backgroundNumber[0];
        document.getElementById("header").style.backgroundImage = "url('content/background/" + currentBackgroundID + ".jpg')";
        break;
      case backgroundNumber[1]:
        currentBackgroundID = backgroundNumber[1];
        document.getElementById("header").style.backgroundImage = "url('content/background/" + currentBackgroundID + ".jpg')";
        break;
      case backgroundNumber[2]:
        currentBackgroundID = backgroundNumber[2];
        document.getElementById("header").style.backgroundImage = "url('content/background/" + currentBackgroundID + ".jpg')";
        break;
      case backgroundNumber[3]:
        currentBackgroundID = backgroundNumber[3];
        document.getElementById("header").style.backgroundImage = "url('content/background/" + currentBackgroundID + ".jpg')";
        break;
      case backgroundNumber[4]:
        currentBackgroundID = backgroundNumber[4];
        document.getElementById("header").style.backgroundImage = "url('content/background/" + currentBackgroundID + ".jpg')";
        break;
      case backgroundNumber[5]:
        currentBackgroundID = backgroundNumber[5];
        document.getElementById("header").style.backgroundImage = "url('content/background/" + currentBackgroundID + ".jpg')";
        break;
      case backgroundNumber[6]:
        currentBackgroundID = backgroundNumber[6];
        document.getElementById("header").style.backgroundImage = "url('content/background/" + currentBackgroundID + ".jpg')";
        break;
      case backgroundNumber[7]:
        currentBackgroundID = backgroundNumber[7];
        document.getElementById("header").style.backgroundImage = "url('content/background/" + currentBackgroundID + ".jpg')";
        break;
      case backgroundNumber[8]:
        currentBackgroundID = backgroundNumber[8];
        document.getElementById("header").style.backgroundImage = "url('content/background/" + currentBackgroundID + ".jpg')";
        break;
      case backgroundNumber[9]:
        currentBackgroundID = backgroundNumber[9];
        document.getElementById("header").style.backgroundImage = "url('content/background/" + currentBackgroundID + ".jpg')";
        break;
      case backgroundNumber[10]:
        currentBackgroundID = backgroundNumber[10];
        document.getElementById("header").style.backgroundImage = "url('content/background/" + currentBackgroundID + ".jpg')";
        break;
      case backgroundNumber[11]:
        currentBackgroundID = backgroundNumber[11];
        document.getElementById("header").style.backgroundImage = "url('content/background/" + currentBackgroundID + ".jpg')";
        break;
      case backgroundNumber[12]:
        currentBackgroundID = backgroundNumber[12];
        document.getElementById("header").style.backgroundImage = "url('content/background/" + currentBackgroundID + ".jpg')";
        break;
      case backgroundNumber[13]:
        currentBackgroundID = backgroundNumber[13];
        document.getElementById("header").style.backgroundImage = "url('content/background/" + currentBackgroundID + ".jpg')";
        break;
      case backgroundNumber[14]:
        currentBackgroundID = backgroundNumber[14];
        document.getElementById("header").style.backgroundImage = "url('content/background/" + currentBackgroundID + ".jpg')";
        break;
      case backgroundNumber[15]:
        currentBackgroundID = backgroundNumber[15];
        document.getElementById("header").style.backgroundImage = "url('content/background/" + currentBackgroundID + ".jpg')";
        break;
      case backgroundNumber[16]:
        currentBackgroundID = backgroundNumber[16];
        document.getElementById("header").style.backgroundImage = "url('content/background/" + currentBackgroundID + ".jpg')";
        break;
      case backgroundNumber[17]:
        currentBackgroundID = backgroundNumber[17];
        document.getElementById("header").style.backgroundImage = "url('content/background/" + currentBackgroundID + ".jpg')";
        break;
      case backgroundNumber[18]:
        currentBackgroundID = backgroundNumber[18];
        document.getElementById("header").style.backgroundImage = "url('content/background/" + currentBackgroundID + ".jpg')";
        break;
      case backgroundNumber[19]:
        currentBackgroundID = backgroundNumber[19];
        document.getElementById("header").style.backgroundImage = "url('content/background/" + currentBackgroundID + ".jpg')";
        break;
      default:
        // work
        break;
    };
  }
};

if (getCookie("setBack") === "") {
  setCookie("setBack", false, 365);
  backgroundChange("random");
} else if (getCookie("setBack") === "false") {
  backgroundChange("random");
} else {
  backgroundChange(getCookie("setBack")); // WORK
};

// Image data
var unsplashImageData = function(imgUrl, imgAuth, imgAuthPro) {
  // Feature soon to come
};

if (currentBackgroundID === 41) {

} else if (currentBackgroundID === 42) {
  unsplashImageData("https://unsplash.com/photos/hIMdKs_0cSE", "Sylvain Guiheneuc", "https://unsplash.com/sylvain_guiheneuc");
} else if (currentBackgroundID === 43) {
  unsplashImageData("https://unsplash.com/photos/T8gIOL3_sdI", "Frances Gunn", "https://unsplash.com/francesgunn");
} else if (currentBackgroundID === 44) {
  unsplashImageData("https://unsplash.com/photos/85hdWh8KtR4", "Jean-Marie Grange", "https://unsplash.com/jeanmariegrange");
} else if (currentBackgroundID === 45) {
  unsplashImageData("https://unsplash.com/photos/FQgHHJzbwo0", "Leeroy", "https://unsplash.com/leeroy");
} else if (currentBackgroundID === 46) {
  unsplashImageData("https://unsplash.com/photos/ywnnwzcdR5o", "Jonathan Bean", "https://unsplash.com/jonathanbean");
} else if (currentBackgroundID === 47) {
  unsplashImageData("https://unsplash.com/photos/r75qppvP-FE", "Eric Huang", "https://unsplash.com/erichuang78910");
} else if (currentBackgroundID === 48) {
  unsplashImageData("https://unsplash.com/photos/DjlKxYFJlTc", "Elliott Engelmann", "https://unsplash.com/elliottengelmann");
} else if (currentBackgroundID === 49) {
  unsplashImageData("https://unsplash.com/photos/Xwk4gkiMNGc", "Oliver & Hen Pritchard-Barrett", "https://unsplash.com/olliepb");
} else if (currentBackgroundID === 50) {
  unsplashImageData("https://unsplash.com/photos/2p1HOcpi14U", "Hide Obara", "https://unsplash.com/hideobara");
} else if (currentBackgroundID === 51) {
  unsplashImageData("https://unsplash.com/photos/sokDJl8L-fs", "Benjamin", "https://unsplash.com/ben_andy");
} else if (currentBackgroundID === 52) {
  unsplashImageData("https://unsplash.com/photos/4jcFu1byopQ", "Davide Ragusa", "https://unsplash.com/davideragusa");
} else if (currentBackgroundID === 53) {
  unsplashImageData("https://unsplash.com/photos/GYumuBnTqKc", "E+N Photographies", "https://unsplash.com/nicomiot");
} else if (currentBackgroundID === 54) {
  unsplashImageData("https://unsplash.com/photos/6-jTZysYY_U", "NASA", "https://unsplash.com/nasa");
} else if (currentBackgroundID === 55) {
  unsplashImageData("https://unsplash.com/photos/R3LcfTvcGWY", "Annie Spratt", "https://unsplash.com/fableandfolk");
} else if (currentBackgroundID === 56) {
  unsplashImageData("https://unsplash.com/photos/GSzD6vGIWKM", "Mickey O'neil", "https://unsplash.com/mickeyoneil");
} else if (currentBackgroundID === 57) {
  unsplashImageData("https://unsplash.com/photos/uAgLGG1WBd4", "Scott Webb", "https://unsplash.com/scottwebb");
} else if (currentBackgroundID === 58) {
  unsplashImageData("https://unsplash.com/photos/JibIPPrvITE", "Micheal Hull", "https://unsplash.com/michaelhull");
} else if (currentBackgroundID === 59) {
  unsplashImageData("https://unsplash.com/photos/-wWRHIUklxM", "Vladimir Kudinov", "https://unsplash.com/madbyte");
} else if (currentBackgroundID === 60) {
  unsplashImageData("https://unsplash.com/photos/tBtuxtLvAZs", "Matthew Wiebe", "https://unsplash.com/matthewwiebe");
};
