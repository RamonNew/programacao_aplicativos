const express = require('express');
const server = express();

server.use(express.json())

//Criando um CRUD (Create, Read, Update, Delete)
/*Cada função em uma rota são definidos req e res, req faz referência a requisção do cliente
(navegador,aplicação, insominia, etc) o res é a resposta que será exibida para a solicação
res.status(codigo) o status é um número que representa o resultado de uma requisição
como exemplo 200 que representa OK e 404 elemento não encontrado
res.status(codigo).json(mensagem) a mensagem é o que será exibido para o cliente
*/

let usuarios = [
    {nome:'Ramon'},
    {nome:'José'},
    {nome:'Maria'},
    {nome:'Carlos'}
]

server.get('/',(req,res)=>{
    //res.json("Olá mundo")
    res.send('Ramon de Holanda');
});

server.get('/usuarios',(req,res)=>{ // O verbo GET usado para o READ
    res.send(usuarios);
});

server.post('/usuarios',(req,res)=>{ // O verbo POST usado para o CREATE
    const nome = req.body.nome; // Body corpo da requição

    let usuario ={
        nome:nome
    }

    usuarios.push(usuario)

    res.status(201).json("Usuário Cadastrado");
});

server.put('/usuarios/:index',(req,res)=>{ // O verbo PUT usado para o UPDATE
    const index = req.params.index; // Params é variavel passada via URL
    const nome = req.body.nome

    let usuario={
        nome:nome
    }

    usuarios[index] = usuario

    res.status(200).json("Usuario atualizado")
})

server.delete('/usuarios/:index',(req,res)=>{ // O verbo DELETE usado para o DELETE
    const index = req.params.index;

    usuarios.splice(index,1)

    res.status(200).json("Usuário Deletado")
})
server.listen(5000);