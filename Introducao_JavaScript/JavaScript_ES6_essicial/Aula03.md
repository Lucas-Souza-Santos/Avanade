# Orientação a objetos

## Herança
    -> Baseada em protótipos
    -> prototype é uma variável que armazena as definições
    do nosso objeto
    -> __proto__
    -> constructor

# Design patterns

### Definição
    Design Patterns ou padrões de projetos são soluções 
generalistas para problemas recorrentes durante o 
desenvolvimento de um software. Não se trata de um framework 
ou um código pronto, mas de uma definição de alto nível de 
como um problema comum pode ser solucionado.

### A Pattern Language 
    - 1978
    - Christopher Alexander, Sara Ishikawa e Murray 
    Silverstein
    - 253 tipos de problemas/desafios de projetos
### Formato de um pattern
    - Nome
    - Exemplo
    - Contexto
    - Problema
    - Solução

### Using Pattern Languages for Object-Oriented Programs
    - 1978
    - Kent Beck e Ward Cunningham
    - 5 padrões de projetos

### Design Patterns: Elements of Reusable Object-Oriented Software
    - 1994
    - Gang of Four(GoF)
    - Erich Gamma, Richard Helm, Ralph Johnson e John 
    Vlissides

### Tipos
    - Criação
    - Estruturais
    - Comportamentais

#### Padrões de criação
    Os padrões de criação são aqueles que abstraem e/ou adiam
o processo criação dos objetos. Eles ajudam a tornar um 
sistema independente de como seus objetos são criados, 
compostos e representados.
    - Abstrat Factory
    - Builder
    - Factory Method 
    - Prototype 
    - Singleton

#### Padroes estruturais
    Os padrões estruturais se preocupam com a forma como 
classes e objetos são compostos para formar estruturas 
maiores.
   - Adapter
   - Bridge
   - Composite
   - Decorator
   - Facade
   - Business Delegate
   - Flyweight
   - Proxy 
#### Padrões comportamentais
    Os padrões de comportamento se concentram nos algoritmos e
atribuições de responsabilidades entre os objetos. Eles não 
descrevem apenas padrões de objetos ou de classses, mas 
também os padrões de comunicação entre os objetos.
    - Charin of Responsibility
    - Command 
    - Interpreter 
    - Iterator
    - Mediator
    - Observer
    - State
    - Strategy
    - Template Method
    - Visitor

### Patterns mais utilizados
    - Factory
    - Singleton
    - Decorator
    - Observeer 
    - Module

#### Factory
    Todas as funções que retornam um objeto, sem anecessidade 
de chamá-las com o new, são consideradas funções Factory
(fabrica).
    - Exemplo do que não é uma função factory
    function FakeUser(){
        this.name: 'Lucas';
        this.lastName: 'Santos'
    }
    const user = new FakeUser();
    - Exemplo de factory
    Function FakeUser(){
        return{
            name: 'Lucas',
            lastName: 'Santos'
        }
    }
    // Factory
    const user = FakeUser();
#### Singleton
    O objetivo desse patterns é criar uma única instância de
uma função construtora e retorná-la toda vez em que for 
necessário utilizá-la.
    Exemplos:
        var SETTINGS = {
            api: 'http://localhost',
            trackJsToken: '12345'
        }
        function MyApp(){
            if(!MyApp.instance){
                MyApp.instance = this;
            }
            return MyApp.instance;
        }
#### Decorator
    Uma função decorator recebe uma outra função como 
parâmetro e estende o seu comportamento sem modificá-la 
explicitamente.

#### Observeer 
    É um pattrn muito popular em aplicações javascript. A
instância(subscriber) mantém uma coleção de objetos 
(observers) e notifica todas eles quando ocorrem mudanças 
no estado.

#### Module
    É um pattern que possibilita organizarmos melhor o nosso
código, sem a necessidade de expor variáveis globais.

