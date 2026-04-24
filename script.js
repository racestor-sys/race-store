function goToProducts() {

document
.getElementById("products")
.scrollIntoView();

}

function buy(productName) {

let phone = "201021612723";

let message =
"مرحبا، أريد شراء المنتج: "
+ productName;

let url =
"https://wa.me/"
+ phone
+ "?text="
+ encodeURIComponent(message);

window.open(url);

}

function whatsapp() {

let phone = "201021612723";

let url =
"https://wa.me/"
+ phone;

window.open(url);

}