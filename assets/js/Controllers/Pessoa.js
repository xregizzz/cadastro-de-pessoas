import { Pessoa } from "../Models/Pessoa.js";
import{db}      from "./../db.js";


class PessoaControle{
     static cadastrarPessoa(pessoa){
        const novaPessoa = new Pessoa(pessoa)
        db.pessoas.push(novaPessoa)
        
        return db.pessoas
     }

}

export{PessoaControle}