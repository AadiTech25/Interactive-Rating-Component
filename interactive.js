let main = document.querySelector(".main-container");
let thanks = document.querySelector(".thankyou-container");
let sbmit = document.getElementById("Submit-btn");
let sbmitThanks = document.getElementById("Submit-btn-thankx");
let rating = document.getElementById("rating")
let rates = document.querySelectorAll(".btn")

sbmit.addEventListener("click", () => {
    thanks.classList.remove("hidden")
    main.style.display= "none";
});

sbmitThanks.addEventListener("click", () => {
    thanks.classList.add("hidden")
    main.style.display= "flex";
});

rates.forEach((rate) => {
    rate.addEventListener("click", () => {
       rating.innerHTML = rate.innerHTML;
    })
})


