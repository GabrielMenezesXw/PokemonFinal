function buscarPersonagem() {
    const idPersonagem = document.getElementById("id_personagem").value

    $.ajax({
        url: "https://rickandmortyapi.com/api/character/" + idPersonagem,
        type: "get",
        success: function (result) {
            document.getElementById("imagem_personagem").src = result.image

            const textoResultado = `
            <ul>
                <li>${result.name}</li>
                <li>${result.status}</li>
            </ul>
            `
            document.getElementById("resultado").innerHTML = textoResultado
        }
    });
}