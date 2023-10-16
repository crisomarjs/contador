document.addEventListener("DOMContentLoaded", function(){
    const countElement = document.getElementById("count");
    const incrementButton = document.getElementById("increment");
    const defaultButton = document.getElementById("default");
    const subtractButton = document.getElementById("subtract");

    let count = 0;

    incrementButton.addEventListener("click", function(){
        count ++;
        countElement.textContent = count;
    });

    defaultButton.addEventListener("click", function(){
        count = 0
        countElement.textContent = count;
    });

    subtractButton.addEventListener("click", function(){
        count --;
        countElement.textContent = count;
    });

});