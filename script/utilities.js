
function getInnerTextById (id){
    const value = document.getElementById(id).innerText;
    const convertedValue = parseInt(value);
    return convertedValue;
}

function getSum (id, sum){
    const value = document.getElementById(id).innerText = sum;
    return value;
}