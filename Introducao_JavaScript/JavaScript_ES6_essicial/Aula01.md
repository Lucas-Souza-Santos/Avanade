# Introdução Ao JavaScript

## História e Conceitos
### Historico
    * Lançado em setembro de 1995
    * Criado por Brendan Eich
    * ECMAScript - É uma especificação da linguagem de programaçao, que é
    padronizada pela ECMA62, da ECMA International. Serve como base para 
    implementação de outras linguagem script.
        - JavaScript
        - JScript
        - ActionScript
    * TC39 - Comitê que cuida da evolução da linguagem
        - https://github.com/tc39
        - https://github.com/tc39/proposals
    * Fluxo de Proposta
        - Stage 0: strawman -> submeter um formulário com a ideia para 
        evoluir o ECMAScript, deve ser feita por um membro ou alguém 
        registrado
        - Stage 1: proposal -> surgi a proposta formal, surgi um campeão,
        proposta bem definida com exemplo, pode ter varias alterações
        - Stage 2: draft -> primeira versão que vai entrar na 
        especificação, é obrigatório:
            -> descrição formal da sintaxe e semâtica da funcionalidade
            -> duas implementação são exigida
        - Stage 3: candidate -> a proposta tá quase finalizada, precisa 
        de feed back de implementação, especificação completa nessa etapa
        - Stage 4: finished -> tem que passar na suiter de teste, 
        esperiência prática
        * ES.NEXT 
            -> É uma especificação que possui futura implementações
            -> Não está disponivel mas pode ser testada no babel
        * BABEL is JavaScript Compiler
            -> 
### Conceitos da Linguagem
    * Linguagem interpretada: o código é executado de cima para baixo e 
    são execultado na msm horas.
    * Linguagem de tipagem fraca e dinâmica
    * Typescript é um superset da linguagem javascript 
        - ele consegui adicionar tipos no javascript
        - ele adiciona funcionalidade que o javascript não tem por padrão
            -> interface
            -> enum
            -> tipo generic
        - https://www.typescriptland.org/
    * Flow
        - não é considerado um superset javascript
        - consegui adicionar tipos
        - https://flow.org/en/
    * Funções de primeira classe e ordem maior
    * Closure a capacidade da variável lembrar aonde foi criada
    * Currying -> tecnica para gente transformar uma função com n 
    paramentro em apenas um parâmetro, e para cada parâmetro agente
    retorna uma função.
    * Hoisting -> levantar ou suspender algo
    * Imutabilidade

    Todas vez que passamos um array ou um object ele é passado por 
    referência.

### Tipos e variáveis
    * existe tres escopo dentro do javascript 
        - Escopo global 
        - Escopo de função
        - Escopo de bloco
    * var
        Var não respeita o escopo de bloco
    * let
    * const 
        - A ideia dele é pra criar constante
        - Ele não deixa trocar o valor de tipo primitivo
        - Se for criado um objeto, ele permiti mudar as própriedades
        - Não pode ser mudado pra aonde o ponteiro dele está apontando
    




