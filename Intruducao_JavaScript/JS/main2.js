function soma(n1, n2){
    return n1 + n2
}

console.log(soma(5, 3))

function setReplace(frase, nome, novo_nome){
    console.log("Frase antiga: \nVai " + nome);
    console.log("Frase nova: ");
    return frase.replace(nome, novo_nome);
}


console.log(setReplace("Vai Angola", "Angola", "Dinamarca"))
