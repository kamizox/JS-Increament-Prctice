var a = 3; 
var b = ++a + a++; 
alert(b);

var a = 2;
var b = ++a * a++ + --a;
// alert(b);

function getmilk(price)
{
    var p = Math.floor(price/1.5);
    console.log(p)
}

getmilk(5)
