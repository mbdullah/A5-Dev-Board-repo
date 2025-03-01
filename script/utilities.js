
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

// New Page open javascript----------------
document.getElementById("middle-container-btn").addEventListener("click", function(){
    window.location.href = "./click.html"
})

// Webpage er vitora right date dakhanor function:----------------
function showDate(){
    let today = new Date();
    let options = {weekday: "short", month: "short", day: "numeric", year: "numeric" };
    let formattedDate = today.toLocaleDateString('en-US', options);
    formattedDate = formattedDate.replace(',', '');
    let parts = formattedDate.split(" ");
    let finalDate = `${parts[0]} <span class="font-bold">,<br>${parts[1]} ${parts[2]} ${parts[3]}</span>`;
    document.getElementById("date").innerHTML = finalDate;
}
showDate();

// Webpage er Randomly background color change  event:----------
function changeBgColor(){
    let randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
    document.body.style.backgroundColor = randomColor;
}