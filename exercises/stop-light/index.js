
function turnOffLights() {
    // change background color of stop light to red
    let offLight= $(".bulb");
    offLight.css("background","black");
}

//-----------------------------------------

// turn on stop function
function turnOnStopLight() {
    // change background color of stop light to red
    turnOffLights();// هنا راح يستدعي الفنكشن مباشرة تصير للون الاسود
    let stopLight = $("#stopLight");
    //css(property,valu);
    stopLight.css("background","red");
}

//--------------------------------------------


// turn on slow function
function turnOnSlowLight() {
// change background color of slow light to yellow
  turnOffLights(); // هنا راح يستدعي الفنكشن مباشرة تصير للون الاسود
  let slowLight = $("#slowLight");
  slowLight.css("background","yellow");
}


//------------------------------------------------

// turn on go function
function turnOnGoLight() {
    // change background color of go light to green
    turnOffLights();// هنا راح يستدعي الفنكشن مباشرة تصير للون الاسود
    let goLight = $("#goLight");
    goLight.css("background","green");
}


//-----------------------------------------------

// set stop light click event

// turnOnStopLight();
// calll or invoke
// هذة الاستدعاء للفنكشن
$("#stopButton").on("click",turnOnStopLight);

//-----------------------------------------

// set slow light click event

// turnOnSlowLight();
// calll or invoke
// هذة الاستدعاء للفنكشن

$("#slowButton").on("click",turnOnSlowLight);

//-----------------------------------------------

// set go light click event

// turnOnGoLight();
// calll or invoke
// هذة الاستدعاء للفنكشن

$("#goButton").on("click",turnOnGoLight);
