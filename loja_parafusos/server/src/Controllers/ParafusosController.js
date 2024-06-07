export class ParafusosController{
    constructor(){
        this.parafusos =[
            {nome:"sextavado"},
            {nome:"francês"},
            {nome:"máquina"},
        ];
    }

    create(req,res){
        const nome = req.body.nome;
        let parafuso ={
            nome:nome
        }

        this.parafusos.push(parafuso);

        res.status(201).json("Parafuso Criado");
    }
    read(req,res){
        //console.debug(JSON.parse(this.parafusos));
        res.status(200).json("sucesso");
        //res.status(200).json(JSON.parse(this.parafusos));
    }
}