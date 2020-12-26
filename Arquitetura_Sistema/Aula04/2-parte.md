## Banco de Dados Relacional
    * SGDBR(br) - RDBMS(en) sistema que gerenciam esse tipo
    de arquitetura.
    * Composto de entidade que agrupa nossas informações
    * Tabela
    * Linha - Registro - Tupla
    * Coluna - Definição o que significa cada informação
    * chaves 
        -> primary keys
        -> for in keys cria nosso relacionamento

### Modelo
    * Modelo conceitual - MER
    * Modelo Lógico - Implementação
    
    O MER pode ser representar por um DER: que é o nosso 
    diagrama de entidade de relacionamento. Esse diagrama 
    facilita a compreensão de como o modelo deve se comportar 
    e também podemos aplicar conceitos de normalização. O DER,
    ele é um diagrama grafico, aonde podemos representar as 
    nossas entidade como o nome, o relacionamento e também 
    possui cliente que é uma outra entidade. O relacionamento
    se dar de uma forma direta ou indireta, nossa entidade 
    tem um força de existência.
#### Entidade
        -> Entidade Forte não dependente de nenhuma outra 
        informação para existir
        -> Entidade fraca que depende de outra informação para
        existir
####  Relacionamento
    Produto M(1...N) |------ venda -------|N(0...N) Venda
    Da direita para esquerda dizemos que Venda possui 1 ou N
    Produtos
    Da esquerda para a direita dizemos que Produto tem 0 ou N
    Venda.
    Cliente 1(1...1) |------- Possui -----| N(0...N)

    Uma relação do tipo M para N é uma relação associativa.
##### entidade item

    Associativa é preciso criar uma nova entidade, que será 
    chamada de entidade associativa
    Vai possuir uma chave estrangeira da entidade Produto e 
    uma estrangeira da entidade Venda.

    Ter uma nova entidade no meio vai resultar em um novo 
    relacionamento entre eles.

## Normalização
    * 1 ... 5 - Forma normal
    * 1,2 e 3 - Mais comum
    para ajeitar um cadastro que errei é criando uma nova 
    tabela, ou uma nova coluna. 
