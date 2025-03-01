
function getInnerTextById (id){
    const value = document.getElementById(id).innerText;
    const convertedValue = parseInt(value);
    return convertedValue;
}

function getSum (id, sum){
    const value = document.getElementById(id).innerText = sum;
    return value;
}


// Clear history button work------
document.getElementById("clear-history-btn").addEventListener("click", function(){
    const childContainer = document.getElementById("child-container");
    childContainer.classList.add("hidden");
})