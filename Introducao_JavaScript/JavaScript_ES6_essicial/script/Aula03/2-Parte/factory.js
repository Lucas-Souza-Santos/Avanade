// Exemplo de uma função que não é factory
function FakeUser1(){
    this.name = 'Lucas';
    this.lastName = 'Santos';
}

const user = new FakeUser1();

// exemplo de factory
function FakeUser2(){
    return {
        name: 'Lucas',
        lastName: 'Santos'
    }
}

const user2 = FakeUser2();

