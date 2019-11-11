let cars = [{brand:'Toyota',model:'Camry','year':1999,'price':20000,image_url:"https://wallpaperaccess.com/full/825374.jpg"},{brand:'BMW',model:'X6',year:2014,price:25000,image_url:"https://wallpaperaccess.com/full/338363.jpg"},{brand:'Daewoo',model:'Nexia',year:2007,price:15000,image_url:"https://wallpaperaccess.com/full/141344.jpg"}];

var x = document.createElement("IMG");
x.setAttribute("src", cars[0].image_url);
x.setAttribute("style", "position: absolute; top: 33px; left: 250px; width:300px; margin: 0 5px;");

var y = document.createElement("IMG");
y.setAttribute("src", cars[1].image_url);
y.setAttribute("style", "position: absolute; top: 33px; left: 600px; width:300px; margin: 0 5px;");

var z = document.createElement("IMG");
z.setAttribute("src", cars[2].image_url);
z.setAttribute("style", "position: absolute; top: 33px; left: 950px; width:300px; margin: 0 5px;");

var a = document.createElement("IMG");
a.setAttribute("src", "014_029_shopping_cart_shop_basket_buy_check_out_checkout_store_ecommerce_add_put_in-128.png");
a.setAttribute("width", "35");
a.setAttribute("height", "35");
a.setAttribute("id", "firsta");
a.setAttribute("style", "background-color: white;position: absolute; top: 33px; left: 520px;");
a.setAttribute("onclick", "first()");

var b = document.createElement("IMG");
b.setAttribute("src", "014_029_shopping_cart_shop_basket_buy_check_out_checkout_store_ecommerce_add_put_in-128.png");
b.setAttribute("width", "35");
b.setAttribute("height", "35");
b.setAttribute("id", "seconda");
b.setAttribute("style", "background-color: white; position: absolute; top: 33px; left: 870px;");
b.setAttribute("onclick", "second()");

var c = document.createElement("IMG");
c.setAttribute("src", "014_029_shopping_cart_shop_basket_buy_check_out_checkout_store_ecommerce_add_put_in-128.png");
c.setAttribute("width", "35");
c.setAttribute("height", "35");
c.setAttribute("id", "thirda");
c.setAttribute("style", "background-color: white; position: absolute; top: 33px; left: 1220px;");
c.setAttribute("onclick", "third()");

var d = document.createElement("IMG");
d.setAttribute("src", "014_028_shopping_cart_shop_basket_buy_check_out_checkout_store_ecommerce_6-128.png");
d.setAttribute("width", "35");
d.setAttribute("height", "35");
d.setAttribute("id", "fourtha");
d.setAttribute("style", "background-color: white; position: absolute; top: 33px; left: 520px;display: none;");
d.setAttribute("onclick", "fourth()");
document.getElementById("idd").appendChild(d);

var e = document.createElement("IMG");
e.setAttribute("src", "014_028_shopping_cart_shop_basket_buy_check_out_checkout_store_ecommerce_6-128.png");
e.setAttribute("width", "35");
e.setAttribute("height", "35");
e.setAttribute("id", "fiftha");
e.setAttribute("style", "background-color: white; position: absolute; top: 33px; left: 870px;display: none;");
e.setAttribute("onclick", "fifth()");
document.getElementById("idd").appendChild(e);

var f = document.createElement("IMG");
f.setAttribute("src", "014_028_shopping_cart_shop_basket_buy_check_out_checkout_store_ecommerce_6-128.png");
f.setAttribute("width", "35");
f.setAttribute("height", "35");
f.setAttribute("id", "sixtha");
f.setAttribute("style", "background-color: white; position: absolute; top: 33px; left: 1220px;display: none;");
f.setAttribute("onclick", "sixth()");
document.getElementById("idd").appendChild(f);


document.getElementById("cars").appendChild(x);
document.getElementById("cars").appendChild(y);
document.getElementById("cars").appendChild(z);

document.getElementById("cars").appendChild(a);
document.getElementById("cars").appendChild(b);
document.getElementById("cars").appendChild(c);


function first() {
    var x = document.getElementById("sum").innerHTML;
    let xx = Number(x);
    let y = document.getElementById("items").innerHTML;
    if (a.style.display != "none"){
        document.getElementById("sum").innerHTML = xx+cars[0].price;
        document.getElementById("items").innerHTML = Number(y)+Number(1);
    }
    else {
        document.getElementById("sum").innerHTML = xx-cars[0].price;
        document.getElementById("items").innerHTML = Number(y)-Number(1);
    }
    a.setAttribute("style", "background-color: white;position: absolute; top: 33px; left: 520px;display:none;");
    d.setAttribute("style", "background-color: white;position: absolute; top: 33px; left: 520px;display:inline-block;");
}

function second() {
    var x = document.getElementById("sum").innerHTML;
    let xx = Number(x);
    let y = document.getElementById("items").innerHTML;
    if (b.style.display != "none"){
        document.getElementById("sum").innerHTML = xx+cars[1].price;
        document.getElementById("items").innerHTML = Number(y)+Number(1);
    }
    else {
        document.getElementById("sum").innerHTML = xx-cars[1].price;
        document.getElementById("items").innerHTML = Number(y)-Number(1);
    }
    b.setAttribute("style", "background-color: white;position: absolute; top: 33px; left: 870px;display:none;");
    e.setAttribute("style", "background-color: white;position: absolute; top: 33px; left: 870px;display:inline-block;");
}

function third() {
    var x = document.getElementById("sum").innerHTML;
    let xx = Number(x);
    let y = document.getElementById("items").innerHTML;
    if (c.style.display != "none"){
        document.getElementById("sum").innerHTML = xx+cars[2].price;
        document.getElementById("items").innerHTML = Number(y)+Number(1);
    }
    else {
        document.getElementById("sum").innerHTML = xx-cars[2].price;
        document.getElementById("items").innerHTML = Number(y)-Number(1);
    }
    c.setAttribute("style", "background-color: white;position: absolute; top: 33px; left: 1220px;display:none;");
    f.setAttribute("style", "background-color: white;position: absolute; top: 33px; left: 1220px;display:inline-block;");
    
}
function fourth() {
    var x = document.getElementById("sum").innerHTML;
    let xx = Number(x);
    let y = document.getElementById("items").innerHTML;
    if (d.style.display != "none"){
        document.getElementById("sum").innerHTML = xx-cars[0].price;
        document.getElementById("items").innerHTML = Number(y)-Number(1);
    }
    else {
        document.getElementById("sum").innerHTML = xx+cars[0].price;
        document.getElementById("items").innerHTML = Number(y)+Number(1);
    }
    d.setAttribute("style", "background-color: white;position: absolute; top: 33px; left: 520px;display:none;");
    a.setAttribute("style", "background-color: white;position: absolute; top: 33px; left: 520px;display:inline-block;");
}

function fifth() {
    var x = document.getElementById("sum").innerHTML;
    let xx = Number(x);
    let y = document.getElementById("items").innerHTML;
    if (e.style.display != "none"){
        document.getElementById("sum").innerHTML = xx-cars[1].price;
        document.getElementById("items").innerHTML = Number(y)-Number(1);
    }
    else {
        document.getElementById("sum").innerHTML = xx+cars[1].price;
        document.getElementById("items").innerHTML = Number(y)+Number(1);
    }
    e.setAttribute("style", "background-color: white;position: absolute; top: 33px; left: 870px;display:none;");
    b.setAttribute("style", "background-color: white;position: absolute; top: 33px; left: 870px;display:inline-block;");
}
function sixth() {
    var x = document.getElementById("sum").innerHTML;
    let xx = Number(x);
    let y = document.getElementById("items").innerHTML;
    if (f.style.display != "none"){
        document.getElementById("sum").innerHTML = xx-cars[2].price;
        document.getElementById("items").innerHTML = Number(y)-Number(1);
    }
    else {
        document.getElementById("sum").innerHTML = xx+cars[2].price;
        document.getElementById("items").innerHTML = Number(y)+Number(1);
    }
    f.setAttribute("style", "background-color: white;position: absolute; top: 33px; left: 1220px;display:none;");
    c.setAttribute("style", "background-color: white;position: absolute; top: 33px; left: 1220px;display:inline-block;");
}



