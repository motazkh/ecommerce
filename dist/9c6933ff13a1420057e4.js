window.bootstrap=require("bootstrap/dist/js/bootstrap.bundle.js");import"bootstrap/dist/css/bootstrap.min.css";import"./css/style.css";import"@fortawesome/fontawesome-free/js/all.min";const tooltipTriggerList=document.querySelectorAll('[data-bs-toggle="tooltip"]'),tooltipList=[...tooltipTriggerList].map((t=>new bootstrap.Tooltip(t)));function calculateTotalPreice(){let t=0;document.querySelectorAll("[data-product-info]").forEach((e=>{const o=e.getAttribute("data-product-price"),r=e.querySelector(".quantity").value;t+=o*r})),document.getElementById("total-price-for-all-product").innerHTML=t+"$"}document.querySelectorAll(".add-to-cart-btn").forEach((t=>{t.addEventListener("click",(()=>{alert("أضيف المنتج الى عربة الشراء")}))})),document.querySelectorAll(".size-option input[type='radio']").forEach((t=>{t.addEventListener("change",(()=>{document.querySelectorAll(".size-option").forEach((t=>{t.classList.remove("active")})),t.parentNode.parentNode.classList.add("active")}))})),document.querySelectorAll(".color-option input[type='radio']").forEach((t=>{t.addEventListener("change",(()=>{document.querySelectorAll(".color-option").forEach((t=>{t.classList.remove("active")})),t.parentNode.parentNode.classList.add("active")}))})),document.querySelectorAll(".quantity").forEach((t=>{t.addEventListener("change",(()=>{const e=t.value,o=t.closest("[data-product-info]"),r=e*o.getAttribute("data-product-price");o.querySelector(".total-price-for-product").innerHTML=r+"$",calculateTotalPreice()}))})),document.querySelectorAll("[data-remove-from-card]").forEach((t=>{t.addEventListener("click",(()=>{t.closest("[data-product-info]").remove(),calculateTotalPreice()}))})),document.getElementById("copyright").innerHTML=" جميع الحقوق محفوظة للمتجر سنة"+(new Date).getFullYear();const cityByCountry={sa:["جدة","الرياض"],om:["صلالة","مسقط"],pal:["معسكر الشاطئ","غزة"],leb:["صور","بيروت"]};