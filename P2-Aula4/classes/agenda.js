const Contato = require('./contato');

class Agenda {
    constructor (contatos = []) {
        this.contatos = contatos;
    }

    addContato(nome, email = [], telefone = [], endereco = []) {
        this.contatos.push(new Contato(nome, email, telefone, endereco));
    }
}

module.exports = Agenda;