import {PessoaControle} from "../Controllers/Pessoa.js"
import{db} from "../db.js"

const ul = document.getElementById("lista-de-alunos")
const totalAlunos = document.getElementById("total-alunos")

class Form{
    static capturarDados(event){

        event.preventDefault()

        const inputs = event.target
        const dataForm = {}

        for( let i = 0; i < inputs.length; i++){
            const {name, value} = inputs[i]

            if(name){
                dataForm[name] = value
            }
        }

        const filtro = db.pessoas.filter(pessoa => pessoa.email == dataForm.email)
       
        if(filtro.length <= 0){
            PessoaControle.cadastrarPessoa(dataForm)
        }else{
            alert("Email usado ja esta cadastrado no sistema")
        }
        listarTodosOsAlunos(db.pessoas)
        totalAlunos.innerText = contarPessoasCadastradas(db.pessoas)
    }
}

function contarPessoasCadastradas(listaPessoas){
    let contador = 0
    for(let i = 0; i < listaPessoas.length; i++){
        contador++
    }
    return contador
}

function listarTodosOsAlunos(listaDeAlunos){
    ul.innerHTML = ""

    listaDeAlunos.forEach((pessoa) => {
        const li = document.createElement("li");
        const nome = document.createElement("p");
        const sobrenome = document.createElement("p");
        const email = document.createElement("p");
        const cargo = document.createElement("p");

        nome.innerText      = pessoa.nome
        sobrenome.innerText = pessoa.sobrenome
        email.innerText     = pessoa.email
        cargo.innerText     = pessoa.cargo

        li.appendChild(nome)
        li.appendChild(sobrenome)
        li.appendChild(email)
        li.appendChild(cargo)

        ul.appendChild(li)
        return ul
    });
}

function filtrarAlunos(){
    let listaFiltrada = []
    const input = document.getElementById("cargoOption")
    let opcaoFilto = input.options[input.selectedIndex].text
    if(opcaoFilto == "Todos"){
        listaFiltrada = db.pessoas
    }else{
        listaFiltrada = db.pessoas.filter(pessoa => pessoa.cargo == opcaoFilto)
    }
    listarTodosOsAlunos(listaFiltrada)
};

let btnPesquisa = document.getElementById("btn")
btnPesquisa.addEventListener("click", filtrarAlunos)

export{Form}