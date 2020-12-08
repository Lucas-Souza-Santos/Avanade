/*function soma(n1, n2){
    return n1 + n2
}

console.log(soma(5, 3))

function setReplace(frase, nome, novo_nome){
    console.log("Frase antiga: \nVai " + nome);
    console.log("Frase nova: ");
    return frase.replace(nome, novo_nome);
}


console.log(setReplace("Vai Angola", "Angola", "Dinamarca"))
*/

function apertou(){
    var texto = document.getElementById("elemento").innerHTML
    console.log(texto)    
}

function redirecionar1(){
    window.open("https://www.google.com");
}

function redirecionar2(){
    window.location.href = "https://www.google.com";
}

function mouseMover(elemento){
    elemento.style.color = "#00f";
    elemento.innerHTML = "Não conseguir fazer o que eu quiz";
}

function voltar(elemento){
    elemento.style.color = "#f00";
    elemento.innerHTML = "Teste";
}

function load(){
    console.log("Página carregada");
}

function pegar(elemento){
    var ele = elemento.value
    var valor = parseInt(ele)
    console.log(valor + 10);
}
