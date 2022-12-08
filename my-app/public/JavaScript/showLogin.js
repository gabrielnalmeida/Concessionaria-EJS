document.querySelector("#show-login").addEventListener("click", function(){
    document.querySelector(".container-form").classList.add("active");
});

document.querySelector(".container-form").addEventListener("click", function(){
    document.querySelector(".container-form").classList.remove("active");
});