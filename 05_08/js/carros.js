// A função pop remove apenas o ultimo elemento
/*function removerCarro(arrayCarro) {
    arrayCarro.pop()
    console.log(arrayCarro)
}*/



//Inicializando um array vazio
let carros = []
//Criando um carro uno
let uno = new Carro("fiat", "XXY-4502", "vermelho", 2012)
carros.push(uno) //Acrescentando o uno no array de carros

//Criando um carro fusca
let fusca = new Carro("volkswagen", "uuu-8978", "branco", 1980)
carros.push(fusca) //Acrescentar o fusca no array de carros

//Criando um carro strada
let strada = new Carro("fiat", "xxx-2020", "branco", 2014)
carros.push(strada) //Acrescentar o fusca no array de carros

//Criando um carro onix
let onix = new Carro("chevrolet", "pps-1420", "prata", 2023)
carros.push(onix) //Acrescentar o fusca no array de carros

console.log(carros)




//removerCarro(carros)