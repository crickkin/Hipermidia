const Pessoa = require('./pessoa');

class Contato {
    constructor(nome, email = [], telefone = [], endereco = []) {
        this.pessoa = new Pessoa(nome, email, telefone, endereco);
    }
}

module.exports = Contato;