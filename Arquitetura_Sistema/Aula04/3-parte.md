# SGDBR - SQL
    * Linguagem
    * DDL - Data Definition Language
    * DML - Data Manitulation Language
    * DQL - Data Query Language

### DDL
    * comando que cria uma tabela
    create table Cliente{
        Codigo number(10) not null primaty key
        Nome varchar(50) not null,
        Telefone varchar(15)
    }

### DML
    insert into Cliente(Codigo, Nome, Telefone)
    values (1, "Lorem ipsum", "(88) 999 9999")

    delete from cliente where Codigo = 1

    Update Cliente set Nome = "Lorem Ipsum" where
    Codigo = 1

### DQL
    Select Codigo, Nome from Cliente
    <where> Codigo = 1
    <Group by> Profissao
    <Having> Count(1) > 0
    <Order by> Nome, Codigo

    Select Codigo, Nome from Cliente
    where Codigo = 1
    Union
    Select Codigo, Nome from Cliente
    where Nome = "Lorem Ipsum"

    Select Quantidade, valor, Descricao from item_venda
    join Produto 
    on Codigo = Cod_Produto
    where valor > 5

### Funções de Conjunto
    Select Sum(ven.Quantidade) as QTotal,
           Sum(ven.Valor) as VTotal,
            pro.Descricao
    from Item_venda ven
    Join Produto pro
    on pro.Codigo = ven.Cod_produto
    where ven.Valor > 5
    Group by pro.Descricao
    Having Sum(ven.Valor) >= 10

### Index
    Select ...
    where Profissao = 1 and Genero = "M"

    index é uma pequena tabela extraida da tabela original
    com as coluna que eu desejo







