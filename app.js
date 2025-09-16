const units = {
    weight: ["kilogram", "gram", "pound"],
    distance: ["metre", "santimetre", "feet", "inç"],
    temperature: ["celsius", "fahrenheit", "kelvin"],
    volume: ["litre", "mililitre", "galon"]
}


function selectTransaction(){
    const input = document.getElementById("inputValue")
    const output = document.getElementById("outputValue")
    if(input.value != ""){
        input.value = ""
        output.value = ""
    }
    const userSelection = document.getElementById("conversionType")
    const selectedUnit = units?.[userSelection.value]
    console.log(selectedUnit);
    
        
    if(userSelection.value == "weight"){
        optionValueAdd(selectedUnit) 
    }
    else if(userSelection.value == "distance"){
        optionValueAdd(selectedUnit)
    }
    else if(userSelection.value == "temperature"){
        optionValueAdd(selectedUnit)
    }
    else if(userSelection.value == "volume"){
        optionValueAdd(selectedUnit)
    }
    else{
        console.log("şuan buraya düşmüyor")
    }
}


function optionValueAdd(selectUnit){
    console.log(document.querySelectorAll(".selector"))
    const selectors = document.querySelectorAll(".selector")

    selectors[0].innerHTML = ""
    selectors[1].innerHTML = ""
    for(let units of selectUnit){       
        selectors.forEach(element => {
            console.log(element)
            element.innerHTML += `<option value = "${units}">${units}</option>`; 
        });
    }    

    selectors[0].selectedIndex = 0;
    selectors[1].selectedIndex = 1;
    function updateSecondSelect() {
        const selectedValue = selectors[0].value;

        for (let i = 0; i < selectors[1].options.length; i++) {
            let option = selectors[1].options[i];

            if (option.value === selectedValue) {
                option.disabled = true;

                if (selectors[1].value === selectedValue) {
                    selectors[1].selectedIndex = (i + 1) % selectors[1].options.length;
                }
            } else {
                option.disabled = false;
            }
        }
    }

    updateSecondSelect();

    selectors[0].addEventListener("change", updateSecondSelect);
    selectors[1].addEventListener("change", () => {
        if (selectors[0].value === selectors[1].value) {
            selectors[1].selectedIndex = (selectors[1].selectedIndex + 1) % selectors[1].options.length;
            updateSecondSelect();
        }
    });
}


function changeOption(){
    const userUnitSelectOne =  document.getElementById("selectFirt")
    const userUnitSelectSecond =  document.getElementById("selectSecond")

    const empty = userUnitSelectOne.value
    userUnitSelectOne.value = userUnitSelectSecond.value
    userUnitSelectSecond.value = empty

    convertFunction()
}