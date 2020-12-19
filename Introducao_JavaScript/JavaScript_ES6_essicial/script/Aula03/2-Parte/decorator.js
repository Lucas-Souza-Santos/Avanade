let loggedin = false;

function callifAuthenticated(fn){
    return !!loggedIn && fn();
}


function sum(a, b){
    return a + b;
}

console.log(callifAuthenticated(() => sum(2, 3)));
