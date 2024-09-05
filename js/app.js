//Criar Função para coletar o cep 

function coletar() {
    let input = document.querySelector('.input-cep').value
    //Teste
    console.log(input)
    Dados(input)
}

//Função para consumir a API Via CEP
async function Dados(input) {
let dados = await fetch(`https://viacep.com.br/ws/${input}/json/`).then(Response => Response.json())
console.log(dados)
ExibirDados(dados)
}

//Funçãp inserir dados na tela
function ExibirDados(dados){
    document.querySelector('.estado').value = dados.uf
    document.querySelector('.cidade').value = dados.localidade
    document.querySelector('.endereco').value = dados.logradouro
    document.querySelector('.ddd').value = dados.ddd
}