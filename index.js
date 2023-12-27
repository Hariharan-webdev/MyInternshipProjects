// Variable Decleration
// Converting btn
var inr = document.getElementById("inr");
var usd = document.getElementById("usd");
var eur = document.getElementById("eur");
var cad = document.getElementById("cad");
var gbp = document.getElementById("gbp");
var aud = document.getElementById("aud");
// Content going to be converted
var basic = document.getElementById("basic");
var intermediate = document.getElementById("intermediate");
var pro = document.getElementById("pro");

// Code is here

inr.addEventListener("click", function() {
    basic.textContent = "₹7,500";
    intermediate.textContent = "₹18,750";
    pro.textContent = "₹37,500";
});

usd.addEventListener("click", function() {
    basic.textContent = "$100";
    intermediate.textContent = "$250";
    pro.textContent = "$500";
});

eur.addEventListener("click", function() {
    basic.textContent = "€85";
    intermediate.textContent = "€210";
    pro.textContent = "€420";
});

cad.addEventListener("click", function() {
    basic.textContent = "$130";
    intermediate.textContent = "$325";
    pro.textContent = "$650";
});

gbp.addEventListener("click", function() {
    basic.textContent = "£70";
    intermediate.textContent = "£175";
    pro.textContent = "£350";
});

aud.addEventListener("click", function() {
    basic.textContent = "$140";
    intermediate.textContent = "$350";
    pro.textContent = "$700";
});