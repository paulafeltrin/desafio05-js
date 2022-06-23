 // Crie um array que receba 5 itens e exiba no console.
let paises = ["Brasil", "Chile", "Panamá", "Portugal", "China"];

console.log(paises);

// Utilize um método para adicionar um nome ao inicio do array.
const novoPais = paises.unshift("Itália");

console.log(paises);

// Utilize um método para remover o último nome do array.
const removerFinal = paises.pop();

console.log(paises);

// Utilize um método para adicionar dois nomes ao fim do array.
const addDoisPaises = paises.splice(5, 0, "Iraque", "Egito");

console.log(paises);

// Utilize um método para remover o primeiro nome do array.
const removerInicio = paises.shift();

console.log(paises);

// Utilize um método para organizar em ordem crescente o seguinte array:
let numbers = [7, 5, 6, 3, 8, 9, 2, 1, 4];

console.log(numbers.sort(), "OU pode");

let ord = numbers.sort(function (a, b){
    return a - b;
});
console.log("Usar functon para ordenar os valores:", ord);
