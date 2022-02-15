function buscarPokemon() {
    const namePokemon = document.getElementById("namePokemon").value

    $.ajax({
        url: "https://pokeapi.co/api/v2/pokemon/" + namePokemon,
        type: "get",
        success: function (result) {
            construirHtmlImagem(result.sprites.front_default)
            construirNome(result.name)
            construirHtmlTipos(result.types)  
            console.log(result.moves[0].move.name) 
            construirGolpes(result.moves)
                      
        }
    });
}
function construirHtmlImagem(imagemUrl){
    document.getElementById("imagemPoke").src = imagemUrl
}
function construirNome(nome){
    document.getElementById("containerNome").innerHTML = nome
}
function construirGolpes(golpes){
    console.log(golpes)
    let containerGolpes = document.getElementById("containerGolpes")
    containerGolpes.innerHTML=""
    golpes.forEach(golpe => {
        console.log(golpe)
        containerGolpes.innerHTML +=`<div class="golpeBox">${golpe.move.name}</div>`
    });       
}
function construirHtmlTipos(tipos) {
    let containerTipos = document.getElementById("containerTipos")
    containerTipos.innerHTML = ""
    tipos.forEach(tipo => {
        containerTipos.innerHTML += `<div class="tipoBox ${(tipo.type.name)}">${tipo.type.name}</div>`
    });        
}
