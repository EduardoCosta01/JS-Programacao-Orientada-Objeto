import { Cliente } from "./Cliente.js"
import { Gerente } from "./Funcionarios/Gerente.js"
import { Diretor } from "./Funcionarios/Diretor.js"
import { SistenaAutenticacao } from "./SistenaAutenticacao.js";

const diretor = new Diretor("Eduardo", 10000, 12345678900);
diretor.cadastrarSenha("123456");

const gerente = new Gerente("Arthur", 5000, 12345678901);
gerente.cadastrarSenha("12345")

const cliente = new Cliente("Maria", 78945612379, "456")

const gerenteEstaLogado = SistenaAutenticacao.login(gerente, "12345");
const diretorEstaLogado = SistenaAutenticacao.login(diretor, "123456");
const clienteEstaLogado = SistenaAutenticacao.login(cliente, "456");


console.log(gerenteEstaLogado, diretorEstaLogado)
console.log(clienteEstaLogado)
