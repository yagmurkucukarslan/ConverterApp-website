const birimler = {
    agirlik: ["kilo", "gram", "pound"],
    uzaklik: ["metre", "santimetre", "feet", "inç"],
    sicaklik: ["Celsius", "Fahrenheit", "Kelvin"]
}

const selectName = ["selectWeight", "selectLength"];

document.getElementById("conversionType").addEventListener("change",selectTransaction);

function selectTransaction(){
    const userSelection = document.getElementById("conversionType")
    const denemeparagraf = document.getElementById("paragraf")
    const inputValue = document.getElementById("selectAgirlik")
    const birimlerSecilen = birimler?.[userSelection.value]
    console.log(birimlerSecilen);
    
    
    if(userSelection.value == "agirlik"){
        denemeparagraf.innerHTML = "şuan agirliktasın";
        optionValueAdd(birimlerSecilen)
    }
    else if(userSelection.value == "uzaklik"){
        denemeparagraf.innerHTML = "şuan uzakliktasın"
        optionValueAdd(birimlerSecilen);
    }
    else if(userSelection.value == "sicaklik"){
        denemeparagraf.innerHTML = "şuan sicaklıktasın"
        optionValueAdd(birimlerSecilen);
    }
    else{
        denemeparagraf.innerHTML = "bir şey seçmediniz"
    }
}

function optionValueAdd(birimlerSecilen){
    console.log(document.querySelectorAll(".selector"))
    const selectors = document.querySelectorAll(".selector")
    selectors[0].innerHTML = ""
    selectors[1].innerHTML = ""
    for(let birim of birimlerSecilen){
        console.log(birim)
        selectors.forEach(element => {
            console.log(element)
            element.innerHTML += `<option value = "${birim}">${birim}</option>`; 
        });
    }
}
