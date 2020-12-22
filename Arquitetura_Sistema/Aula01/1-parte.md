# Fundamentos de Arquitetura de sistemas

## Serviços Web
    - Serviços Web ou  Web Services são soluções para
aplicações se cominicarem independente de linguagem,software 
e hardwares utilizados.

    - Inicialmente Serviços Web foram criados para troca de
mensagens utilizando a linguagem XML(Extensible Markup 
Languagem) sobre o protocolo HTPP sendo identificado por URI
(Uniform Resource Identifier).

    - Podemos dizer que Serviços Web são API's que se 
comunicam por meio de redes sobre o protrocolo HTPP.

#### ilustração
    - Aplicação x
    - Banco de dados x

    - Aplicação y
    - Banco de dados y

    Essas aplicações precisando se comunicar, mas elas são 
feitas como tecnologias diferentes: uma usa python a outra usa
java; o banco de dados de uma é feita em oracle e o da outra 
em postgree, como fazer elas se comunicarem ?


    - web service vai ter o acesso a banco de dados, da 
aplicação x; a diferença é que ele vai expor uma URI, para que
a aplicação y tenha acesso. O web service vai fazer uma troca
de mensagem, através de:
        * XML, JSON e outras linguagens.

Exemplo de XML:
    <endereco>
        <cep>9999-99</cep>
        <bairro>Jardim Paulista</bairro>
        <logradouro>Av. Paulista</logradouro>
        <cidade>São Paulo</cidade>
        <numero>99</numero>    
    </endereco>

Exemplo: 
    {
        "endereco":{
            "cep"       : "99999-99",
            "logradouro": "Av. Paulista",
            "bairro"    : "Jardim Paulista",
            "cidade"    : "São Paulo",
            "numero"    : 99
        }
    }

## Vantagens
    * Linguagem comum
    * Integração
    * Reutilização de implementação
    * Segurança
    * Custos

## Principais Tecnologias
    * SOAP
    * REST
    * XML
    * JSON
