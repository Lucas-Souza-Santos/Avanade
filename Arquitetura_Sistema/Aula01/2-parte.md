## O que é SOAP
    * SOAP - Simple Object Access Protocol
    * É um protocolo baseado em XML para acessar serviços web
      principalmente HTTP.
    * Pode-se dizer que SOAP é uma definição de como serviços 
      web se comunicam
    * Foi desenvolvido para facilitar integrações entre 
      aplicações.
    * Permite integrações entre aplicações, independente de 
      linguagem, pois usa como linguagem comum o XML.
    * É independente de plataforma e software.
    * Meio de transporte genérico, ou seja, pode ser usado por
      outros protocolos além do HTTP

## XML
    * XML - Extensible Markup Language
    * É uma linguagem de marcação criada na década de 90 pela 
      W3C.
    * Facilita a separação de conteúdo
    * Não tem limitação de criação de tags
    * Linguagem comum para integrações entre aplicações.

## Estrutura do SOAP
    * O "SOAP Message" possui uma estrutura única que deve 
      sempre ser seguida.
      
                +---------------------------+
                |       SOAP Envolope       |
                |   +-------------------+   |
                |   |   SOAP Header     |   |
                |   +-------------------+   |
                |                           |
                |   +-------------------+   |
                |   |   SOAP Body       |   |
                |   |                   |   |
                |   |                   |   |
                |   +-------------------+   |
                +---------------------------+

    * SOAP Envelope é o primeiro elemento do documento e é 
      usado para encapsular toda a mensagem SOAP.
    * SOAP Header é o elemento onde possui informações de
      atributos e metadados da requisição.
    * SOAP Body é o elemento que contém os detalhes da 
      mensagem.






