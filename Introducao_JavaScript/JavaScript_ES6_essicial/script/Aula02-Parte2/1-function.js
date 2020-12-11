function fn(){
    return 'Code Here';
}

const arrowFn = () => 'Code here';

const arrowFn2 = () => {
    // Mais de uma expressão
    return 'Code here'
}

// funções também são objetos
fn.prop = 'Possoo criar propriedades';

console.log(fn());
console.log(fn.prop);

// Receber parâmetros
const logValue = value => console.log(value);
const logFnResult = fnParam => console.log(fnParm());

logFnResult(fn);

// Receber e retornar funções
const controlFnExec = fnParan => allowed => {
    if(allowed){
        fnParant();
    }
}

const handledFnExecution = controlFnExec(fn);

handledFnExecution(true);   // Executará a funçaõ fn
handledFnExecution();       // Não executará a função fn

// controlFnExec como função
function controlFnExec(fnParam){
    return function(allowed){
        if (allowed){
            fnParam();
        }
    }
}















