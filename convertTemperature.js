//Crie uma Função que Converte Celsius to Fahrenheit!
/*
function convertCtoF(Celsius){
    return Celsius * (9/5) + 32;
}

function convertFtoC(valor, tipo){
    return (Fahrenheit - 32) * 5/9; 
}
*/

// Agora junte as funções em uma só!

function convertTemp(valor, tipo){
    tipo = tipo.toLowerCase();
    if (tipo === "c"){
        return(valor * (9/5) + 32).toFixed(2); //Celsius -> Fahrenheit
    } else if (tipo === "f") {
        return ((valor - 32) * 5/9).toFixed(2); // Fahrenheit -> Celsius
    } else {
        return "tipo inválido";
    }
}

console.log(convertTemp(0,"f"));
console.log(convertTemp(0,"c"));

/*Implementei algumas coisas, defini o tipo para lowercase com 
.toLowerCase e usei .toFixed para usar duas casas decimais.*/

