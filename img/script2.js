const button = document.getElementById("botao");

button.addEventListener("click", (evento) => {
    evento.preventDefault();

    const nome = document.getElementById("nome").value;
    const img = document.getElementById("imagem");


    fetch('http://localhost:5001/maravilhosas', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            'title': nome,
            'image': {
                'url':img

            }
           
        })
    })
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        console.log(data);

    })
    .catch((erro) => {
        console.log(erro)
    })


})