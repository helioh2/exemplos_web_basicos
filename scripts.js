
let formPokedex = document.getElementsByClassName("form-pokedex")[0];
let inputPokedex = document.getElementById("nome-pokemon")
let imgPokemon = document.getElementById("img-pokemon")

console.log(inputPokedex.placeholder)
console.log(formPokedex)

formPokedex.addEventListener("submit", async function(ev) {
    ev.preventDefault();
    // fetch("https://pokeapi.co/api/v2/pokemon/agumon")
    //                 .then(res => { // quando a resposta retornar
    //                     console.log("Recebi a resposta")
    //                     console.log(res)    
    //                     console.log(res.status)
    //                     return res.json()  //retorna uma Promise
    //                 })
    //                 .then(json => {
    //                     console.log(json);
    //                 }).catch(err => {
    //                     console.log(err)
    //                     console.log(`ERRO`)
    //                 });  //requisição assíncrona

    const nomePokemon = inputPokedex.value
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${nomePokemon}`);
    if (res.status != 200) {
        console.log("ERRO")
        return 
    }
    const json = await res.json()

    const imgPokemonUrl = json["sprites"]["versions"]["generation-v"]["black-white"]["animated"]["front_default"]
    console.log(imgPokemonUrl)
    console.log(json)

    imgPokemon.src = imgPokemonUrl


});