// vai requisitar uma aps
async function cadastrar(){
    // recuperar os dados do usuario
    let nome = document.getElementById("nome").value
    let tipo = document.getElementById("tipo").value
    let poder= document.getElementById("poder").value
    let nota = Number(document.getElementById("nota").value)

    // criar o dado para enviar
    let dado ={
        nome, tipo, poder, nota
    }  
    // chamar ou consumir a API utilizando fetch
    await fetch('http://localhost:8080/pokemon',{
        method: 'POST',
        body: JSON.stringify(dado),
        headers: {"Content-Type": "application/json; charset=UTF-8"}
    })
    .then(resposta => {
        alert('Cadastro foi realizado com sucesso')
    })
    .catch( error => {
        alert(error)
    })
}