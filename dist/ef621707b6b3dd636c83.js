window.bootstrap=require("bootstrap/dist/js/bootstrap.bundle.js");import"bootstrap/dist/css/bootstrap.min.css";import"./css/style.css";import"@fortawesome/fontawesome-free/js/all.min";const tooltipTriggerList=document.querySelectorAll('[data-bs-toggle="tooltip"]'),tooltipList=[...tooltipTriggerList].map((t=>new bootstrap.Tooltip(t)));document.querySelectorAll(".add-to-cart-btn").forEach((t=>{t.addEventListener("click",(()=>{alert("أضيف المنتج الى عربة الشراء")}))})),document.querySelectorAll(".product-option input[type='radio']").forEach((t=>{t.addEventListener("change",(()=>{document.querySelectorAll(".product-option").forEach((t=>{t.classList.remove("active")})),t.parentNode.parentNode.classList.add("active")}))})),document.getElementById("copyright").innerHTML=" جميع الحقوق محفوظة للمتجر سنة"+(new Date).getFullYear();