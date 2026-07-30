/*Soma +
Subtração -
Divisão /
multiplicação *
Resto (Módulo) %
Potência **
> Maior que
< menor que
>=maior ou igual que
<=Menor ou igual que 
!= Diferente
== Valores iguais
=== Estritamente Igual
!== Estritamente Diferente;*/
console.log(10 == "10"); //igual em valores, mas o tipo da variável é diferente , == não exige q sejas stritamente iguais
console.log("------------");
console.log("10" === 10); // === exige que sejam estritamente iguais

let botao = "true";

console.timeLog(typeof botao);//reconhece o tipo da variável

let perfil = "Administrador";
let categoria = 2;

if (perfil === "Administrador" && categoria === 2){
    console.log("Dança das cadeiras")
}
else{
    console.log("Prova de magia.")
}

//&& = e, ambas as condições devem ser atendidas
// || apenas uma das condições dvee ser atendida

// NOT - inversão de valores
let ativo = true;

console.log(!ativo);
console.log(!false);