let userInput = document.getElementById("input");
let calcButton = document.getElementById("exchange");
let url = "https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies";
let selects = document.querySelectorAll(".selection select");
let resultPara = document.getElementById("result");
let fCurrency = document.querySelector(".from select")
let tCurrency = document.querySelector(".to select")

for(let select of selects){
    for(let code in countryList){
        let newOption = document.createElement("option");
        newOption.innerText = code;
        newOption.value = code;
        select.prepend(newOption);
        if(select.name == "from" && code == "USD"){
            newOption.selected = "selected";
        } else if(select.name == "to" && code == "PKR"){
            newOption.selected = "selected";
        }
    }
    select.addEventListener("change", ()=>{
        updateFlag(select)
    })
}

const updateFlag = (event)=>{
    let currencyCode = event.value;
    let countryCode = countryList[currencyCode];
    let newsrc = `https://flagsapi.com/${countryCode}/shiny/64.png`;
    event.parentElement.querySelector("img").src = newsrc;
}

calcButton.addEventListener("click", async (e)=>{
    e.preventDefault(); 
    let inputValue = userInput.value;
    if(inputValue == "" || inputValue < 1){
        userInput.value = '1';
        inputValue = 1;
    }
    let newUrl= `${url}/${fCurrency.value.toLowerCase()}/${tCurrency.value.toLowerCase()}.json`;
    let response = await fetch(newUrl);
    let data = await response.json();
    let rate = data[tCurrency.value.toLowerCase()];
    let finalAmount = inputValue * parseInt(rate)
    resultPara.textContent = `${inputValue} ${fCurrency.value} is equal to ${parseInt(finalAmount)} ${tCurrency.value}`
})