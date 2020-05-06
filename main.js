// var body = $('body');
// var colors = ['red', 'green', 'blue', 'yellow', 'pink', 'purple'];
// var currentIndex = 0;
// setInterval(function () {
//    body.css({
//      backgroundColor: colors[currentIndex]
//    });
//    if (!colors[currentIndex]) {
//        currentIndex = 0;
//    } else {
//        currentIndex++;
//    }
// }, 100);
function setbackground()
{
window.setTimeout( "setbackground()", 2500); // 5000 milliseconds delay
var index = Math.round(Math.random() * 9);
var ColorValue = "FFFF00"; // default color - white (index = 0)
if(index == 1)
ColorValue = "CAA2A2"; //peach
if(index == 2)
ColorValue = "CFF80F"; //violet
if(index == 3)
ColorValue = "A6BEFF"; //lt blue
if(index == 4)
ColorValue = "99FFFF"; //cyan
if(index == 5)
 ColorValue = "D5CCBB"; //tan
if(index == 6)
ColorValue = "99FF99"; //lt green
if(index == 7)
ColorValue = "FFFF99"; //lt yellow
if(index == 8)
ColorValue = "FFCC99"; //lt orange
if(index == 9)
ColorValue = "CCCCCC"; //lt grey
document.getElementsByTagName("body")[0].style.backgroundColor = "#" + ColorValue;
}

window.location