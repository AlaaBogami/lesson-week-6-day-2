
//--------------------------------

function switchGray(){

  let switcher = $("#switcher");
  // change background to gray
  document.body.style.backgroundColor = 'gray'

  // let body = $("body");
  // body.css("background","gray")

  // change font to white
  $("p").css("color","white");
  $("h1").css("color","white");

  // body.css("color","white");


  //or
  // نجمعها كلها مع بعض
  // body.css({"background":"gray",
  // "color":"white"})


}

//---------------------------------

function switchWhite() {

  let switcher = $("#switcher");
// change background to white
document.body.style.backgroundColor = 'White'
// let body = $("body");
// body.css("background","white")

// change font to black
$("p").css("color","black");
$("h1").css("color","black");

  // body.css("color","black");


//or
// نجمعها كلها مع بعض
// body.css({"background":"white",
// "color":"black"})

}
//---------------------------------


// click event for gray button
// switchGray();
$("#grayButton").on("click",switchGray);


// click event for white button
// switchWhite();
$("#whiteButton").on("click",switchWhite);
