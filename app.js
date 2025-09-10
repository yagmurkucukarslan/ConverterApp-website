const birimler = {
    agirlik: ["kilo", "gram", "pound"],
    uzaklik: ["metre", "santimetre", "feet", "inç"],
    sicaklik: ["Celsius", "Fahrenheit", "Kelvin"]
}

document.getElementById("conversionType").addEventListener("change",selectTransaction);

function selectTransaction(){
    const userSelection = document.getElementById("conversionType")
    const denemeparagraf = document.getElementById("paragraf")
    const inputValue = document.getElementById("selectAgirlik")
    const birimlerSecilen = birimler?.[userSelection.value]
    console.log(birimlerSecilen);
    
    
    if(userSelection.value == "agirlik"){
        denemeparagraf.innerHTML = "şuan agirliktasın"
        for(let birim of birimlerSecilen){
            console.log(birim)
            document.getElementById("selectAgirlik").innerHTML += `<option value = "${birim}">${birim}</option>`;
        }
    }
    else if(userSelection.value == "uzaklik"){
        denemeparagraf.innerHTML = "şuan uzakliktasın"

    }
    else if(userSelection.value == "sicaklik"){
        denemeparagraf.innerHTML = "şuan sicaklıktasın"
    }
    else{
        denemeparagraf.innerHTML = "bir şey seçmediniz"
    }
}