var nome = "Lucas de Souza Santos";
var idade = 28

var frase = "O Japão é a melhor celeção do mundo";
// comentário de uma linha
/**
 * Comentário multiplas linhas
 */

// alert("Seja Bem Vindo " + nome);

console.log(nome)
console.log(idade)

console.log(frase.replace("Japão", "Brasil"));

var lista = ["Maçã", "Laranja", "Pera", "Limão"].toString()

console.log(lista)


// dicionário
var fruta = {nome: "maça", cor: "vermelho"}
console.log(fruta["nome"])
console.log(fruta["cor"])

// condicionais

if(idade >= 18){
    console.log("Maior de Idade");
}else{
    console.log("Menor de Idade");
}

var count = 0;
while (count <= 5){
    console.log(count);
    count++;
}
console.log("Vareável i");

for (var i = 0; i < 5; i++){
    console.log(i)
}

var d = new Date();
console.log(d.getDate())


