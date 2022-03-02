import{Form} from "./Models/Form.js"
import { db } from "./db.js"

const btnCadastrarPessoa = document.querySelector("body")
btnCadastrarPessoa.addEventListener("submit", Form.capturarDados)




