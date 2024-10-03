window.bootstrap = require('bootstrap/dist/js/bootstrap.bundle.js');
import "bootstrap/dist/css/bootstrap.min.css" ;
import "./css/style.css" ;   
import "@fortawesome/fontawesome-free/js/all.min" ; 
const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))

document.querySelectorAll(".add-to-cart-btn").forEach(item => {
    item.addEventListener("click" , () => {
        alert("أضيف المنتج الى عربة الشراء")
    })
}) 

document.querySelectorAll(".size-option input[type='radio']").forEach(item => {
    item.addEventListener("change" , () => {
        document.querySelectorAll(".size-option").forEach(i => {
            i.classList.remove("active")
        })
        item.parentNode.parentNode.classList.add("active")
    })
})

document.querySelectorAll(".color-option input[type='radio']").forEach(item => {
    item.addEventListener("change" , () => {
        document.querySelectorAll(".color-option").forEach(i => {
            i.classList.remove("active")
        })
        item.parentNode.parentNode.classList.add("active")
    })
})

document.querySelectorAll(".quantity").forEach(item => {
    item.addEventListener("change" , () => {
        const newQuantity = item.value;
        const parent = item.closest("[data-product-info]") ;
        const price = parent.getAttribute("data-product-price");
        const totalPrice = newQuantity * price 
        parent.querySelector(".total-price-for-product").innerHTML = totalPrice + "$" ;

        calculateTotalPreice ();
    })
})

document.querySelectorAll("[data-remove-from-card]").forEach(item => {
    item.addEventListener("click" , () => {
        item.closest("[data-product-info]").remove() ;

        calculateTotalPreice ();
    })
})

document.getElementById("copyright").innerHTML = " جميع الحقوق محفوظة للمتجر سنة" + new Date().getFullYear();

function calculateTotalPreice () {
    let totalPriceForAllProduct = 0 ;
        document.querySelectorAll("[data-product-info]").forEach(product => {
            const price = product.getAttribute("data-product-price") ;
            const quantity = product.querySelector(".quantity").value ;
            const totalPrice = price * quantity ;
            totalPriceForAllProduct = totalPriceForAllProduct + totalPrice ;
        })
        document.getElementById("total-price-for-all-product").innerHTML = totalPriceForAllProduct + "$"
}