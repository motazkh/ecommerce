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
/*
const cityByCountry = { 
    sa: ["جدة" , "الرياض"], 
    om: ["صلالة" , "مسقط"], 
    pal: ["معسكر الشاطئ" , "غزة"], 
    leb: ["صور" , "بيروت"]
}
document.querySelectorAll("select[name='country']").forEach(item => {
    item.addEventListener("change" , () => {
        const country = item.value

        const city = cityByCountry[country]

        document.querySelectorAll("payment-city option").forEach(option => option.remove())

        const firstOption = document.createElement("option")
        const optionText = document.createTextNode("اختر المدينة")
        firstOption.appendChild(optionText)
        firstOption.setAttribute("value","")
        firstOption.setAttribute("disabled","true")
        firstOption.setAttribute("selected","true")

        const cityOptions = document.getElementById("#payment-city")
        cityOptions.appendChild(firstOption)

        city.forEach(city => {
            const newOption = document.createElement("option")
            const optionText = document.createTextNode(city)
            newOption.appendChild(optionText)
            newOption.setAttribute("value",city)
            cityOptions.appendChild(newOption)
        })
    })
})
    
*/
const cityByCountry = { 
    sa: ["جدة", "الرياض"], 
    om: ["صلالة", "مسقط"], 
    pal: ["معسكر الشاطئ", "غزة"], 
    leb: ["صور", "بيروت"]
};

document.querySelectorAll("select[name='country']").forEach(item => {
    item.addEventListener("change", () => {
        const country = item.value;
        const cities = cityByCountry[country] || []; // تأكد من وجود المدن

        // إزالة جميع الخيارات الموجودة
        const citySelect = document.getElementById("payment-city");
        citySelect.innerHTML = ""; // استخدم innerHTML لمسح الخيارات

        // إضافة الخيار الافتراضي
        const firstOption = document.createElement("option");
        const optionText = document.createTextNode("اختر المدينة");
        firstOption.appendChild(optionText);
        firstOption.setAttribute("value", "");
        firstOption.setAttribute("disabled", "true"); // تصحيح كلمة "disabed" إلى "disabled"
        firstOption.setAttribute("selected", "true");
        citySelect.appendChild(firstOption);

        // إضافة خيارات المدن
        cities.forEach(city => {
            const newOption = document.createElement("option"); // استخدم createElement بدلاً من createComment
            const optionText = document.createTextNode(city);
            newOption.appendChild(optionText);
            newOption.setAttribute("value", city);
            citySelect.appendChild(newOption);
        });
    });
});

// اخفاء و اظهار عناصر الدفع 

document.querySelectorAll("#form-checkout input[name='payment-method']").forEach(item => {
    item.addEventListener("change", () => {
        const paymentMethod = item.value

        const creditCardInput = document.querySelectorAll("#credit-card-info input")

        if(paymentMethod === "COD") {
            creditCardInput.forEach(input => {
                input.style.display="none"
            })
        } else {
            creditCardInput.forEach(input => {
                input.style.display="block"
            })
        }
    })
})
