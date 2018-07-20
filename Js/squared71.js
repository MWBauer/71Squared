document.writeln("<h1>Square the numbers from 1 to 10</h1>");
for(var x =1; x <= 10; x++) {
  document.writeln("The square of " + x + " is " + square(x) + "<br/>");
}
var a;
num = window.prompt("Pick a number to be squared: ")
function square(num) {
  return num * num;
}
document.writeln("<h2>The number you picked is: " + num + ", and it's square is " + square(num) + "</h2>")