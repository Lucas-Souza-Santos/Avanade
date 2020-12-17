// in
something in somethingItens;

// arrays
var arvores = new Array('pau-brasil', 'loureiro', 'cedro', 'carvalho', 'sicônare');

0 in arvores                // retorna true
3 in arvores                // retorna true
6 in arvores                // retorna false
"cedro" in arvores          // retorna false
"length" in arvores         // retorna true


// objetos prederinidos 
"PI" in Math;               // retorna true
var minhaString = new String["coral"];
length in minhaString       // retorna true

// objetos personalizados
var meuCarro = {marca: "Honda", modelo: "Accord", ano: 1998}
"marca" in meuCarro         // retorna true
"modelo" in meuCarro        // retorna true

// instaceof
Object instanceof tipoObjeto

var dia = new Date(2018, 12, 17);

if (dia instanceof Date){
    // code here
}

