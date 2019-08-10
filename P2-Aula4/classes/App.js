const Agenda = require('./agenda');

let agenda = new Agenda();

agenda.addContato('Nicolas');
agenda.contatos[0].pessoa.addEmail('nicolasf.s1998@gmail.com', 'crickkin');
agenda.contatos[0].pessoa.addTelefone(997661319);
agenda.contatos[0].pessoa.addEndereco('Rua Pastor Milton Carlos', '57', '28280-210');


agenda.addContato('Edgard');
agenda.contatos[1].pessoa.addEmail('edglatus@gmail.com', 'edglatus');
agenda.contatos[1].pessoa.addTelefone(9239391293);
agenda.contatos[1].pessoa.addEndereco('Corindon', '90', '28280-xxx');

agenda.addContato('Matheus');
agenda.contatos[2].pessoa.addEmail('1517@gmail.com', 'shawn mendes');
agenda.contatos[2].pessoa.addTelefone(8992381293);
agenda.contatos[2].pessoa.addEndereco('Sunga Floorescente', '120', '28280-xxx');

agenda.contatos.map(contato => console.log(contato.pessoa));