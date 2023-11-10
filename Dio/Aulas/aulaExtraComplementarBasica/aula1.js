//juntando duas arrays
let peaple= ["adam","monty", "andrew"]
let more_people = ["james",...peaple,"jack","sajal"]
//console.log(more_people)


//for of
for (iterator of peaple) {
    console.log(iterator)
}

//obs nunca usar a funcao eval() pois ela pode executar codigo com privilegios do caller, podendo ter brecha maliciosa