const converters = [
    {
        from_key : "kilogram",
        transactions: [
            {
                to_key: 'pound',
                result: (value) => { return value * 2.2046}
            },
            {
                to_key: 'gram',
                result: (value) => { return value * 1000}
            },
        ]
    },
    {
        from_key: "gram",
        transactions: [
            {
                to_key: "kilogram",
                result: (value) => { return value / 1000}
            },
            {
                to_key: "pound",
                result: (value) => { return value * 0.0022046}
            }
        ]
        
    },
    {
        from_key: "pound",
        transactions: [
            {
                to_key: "kilogram",
                result: (value) => { return value / 2.2046}
            },
            {
                to_key: "gram",
                result: (value) => { return value / 0.0022046}
            }
        ]
    },
    {
        from_key: "metre",
        transactions: [
            {
                to_key: "santimetre",
                result: (value) => { return value * 100}
            },
            {
                to_key: "feet",
                result: (value) => { return value * 3.280839895}
            },
            {
                to_key: "inç",
                result: (value) => { return value * 39.3700787}
            }
        ]
    },
        {
        from_key: "santimetre",
        transactions: [
            {
                to_key: "metre",
                result: (value) => { return value / 100}
            },
            {
                to_key: "feet",
                result: (value) => { return value * 0.032808399}
            },
            {
                to_key: "inç",
                result: (value) => { return value * 0.393700787}
            }
        ]
    },    {
        from_key: "feet",
        transactions: [
            {
                to_key: "santimetre",
                result: (value) => { return value * 30.48}
            },
            {
                to_key: "metre",
                result: (value) => { return value * 0.3048}
            },
            {
                to_key: "inç",
                result: (value) => { return value * 12}
            }
        ]
    },    {
        from_key: "inç",
        transactions: [
            {
                to_key: "santimetre",
                result: (value) => { return value * 2.54}
            },
            {
                to_key: "feet",
                result: (value) => { return value * 0.083333333}
            },
            {
                to_key: "metre",
                result: (value) => { return value * 0.0254}
            }
        ]
    },
    {
        from_key: "galon",
        transactions: [
            {
                to_key: "litre",
                result: (value) => { return value * 3.78541}
            },
            {
                to_key: "mililitre",
                result: (value) => { return value * 3785.41}
            }
        ]
    },
        {
        from_key: "litre",
        transactions: [
            {
                to_key: "galon",
                result: (value) => { return value * 0.264172052}
            },
            {
                to_key: "mililitre",
                result: (value) => { return value * 1000}
            }
        ]
    },    
    {
        from_key: "mililitre",
        transactions: [
            {
                to_key: "litre",
                result: (value) => { return value * 0.001}
            },
            {
                to_key: "galon",
                result: (value) => { return value * 0.00026417}
            }
        ]
    },
    {
        from_key: "celsius",
        transactions: [
            {
                to_key: "fahrenheit",
                result: (value) => { return (value * 1.8) + 32}
            },
            {
                to_key: "kelvin",
                result: (value) => {
                    const donusum = parseFloat(value) + 273.15
                    if(donusum < 0){
                        return console.log("geçersiz değer girdiniz")
                    }
                    else{
                        console.log(donusum);
                    }
                }
            }
        ]
    },
    {
        from_key: "fahrenheit",
        transactions: [
            {
                to_key: "celsius",
                result: (value) => { 
                    const deger =  (value - 32) / 1.8
                    if(deger < -273.15){
                        console.log("geçersiz fahrenheit değeri girdiniz. celsius -273.15'ten küçük olamaz")
                    }
                    else{
                        return deger
                    }
                }
            },
            {
                to_key: "kelvin",
                result: (value) => { 
                    const donusum = ((value - 32) / 1.8 ) + 273.15
                    if(donusum < 0){
                        console.log("geçersiz değer girdiniz")
                    }
                    else{
                        console.log(donusum);
                    }
                }
            }
        ]
    },
    {
        from_key: "kelvin",
        transactions: [
            {
                to_key: "celsius",
                result: (value) => { 
                    if(value >= 0){
                        return value - 273.15
                    }
                    else{
                        console.log("geçersiz kelvin değeri girdiniz")
                    }
                }
            },
            {
                to_key: "fahrenheit",
                result: (value) => { 
                    if(value >= 0){
                        return ((value - 273.15) * 1.8) + 32
                    }
                    else{
                        console.log("geçersiz kelvin değeri girdiniz")
                    }
                }
            }
        ]
    },
]

document.getElementById("selectFirt").addEventListener("change",birimSecimi)
document.getElementById("selectSecond").addEventListener("change",birimSecimi)


function birimSecimi(){
    const userUnitSelectone =  document.getElementById("selectFirt")
    const userUnitSelectsecond =  document.getElementById("selectSecond")

    const birincibirimSecimi = userUnitSelectone.value
    const ikincibirimsecimi = userUnitSelectsecond.value
    const inputgiris = document.getElementById("inputValue").value
    console.log("birinciii "+birincibirimSecimi)
    console.log("ikinci "+ikincibirimsecimi) 

    //const fetge = converters.find((x) => (x.from_key == birincibirimSecimi && x.to_key == ikincibirimsecimi)).transactions[0].result(1000)
    //console.log(fetge)
    const deneme = 
    converters.find((c) => c.from_key == birincibirimSecimi).transactions.find((e) => e.to_key == ikincibirimsecimi).result(inputgiris)
    console.log(deneme)

}
//(c) => c.transactions.find((e) => e.to_key == ikincibirimsecimi



