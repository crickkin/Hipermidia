const Telefone = require('./telefone');
const Email = require('./email');
const Endereco = require('./endereco');

class Pessoa {
    constructor(nome, email=[], telefone=[], endereco=[]) {
        this.nome = nome;
        this.email = email;
        this.telefone = telefone;
        this.endereco = endereco;
    }

    addEmail(url, nickname){
        this.email.push(new Email(url, nickname));
    }

    addTelefone(numero, ddd = 22, ddi = 15){
        this.telefone.push(new Telefone(numero, ddd, ddi));
    }

    addEndereco(rua, numero, cep){
        this.endereco.push(new Endereco(rua, numero, cep));
    }
}

module.exports = Pessoa;