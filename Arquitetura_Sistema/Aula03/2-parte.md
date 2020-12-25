# Arquitetura da Internet das Coisas

### Conectando as coisas...
    * Como conectar as coisas ?

### Considere esses atributos na escolha 
    * Baixo consumo de energia
    * Rede de dados limitado
    * Resiliencia
        Armazenar os dados localmente, enquanto eu não tenho 
        rede(Buffer).  
    * Segurança
    * Customização
        o que vc estar desenvolvendo vai sempre encontrar um 
        ambiente heterogeneo.
    * Baixo Custo

### Arduino
    * Plataforma de Prototipagem
    * Com entradas/saídas
    * Desenvolvedor escreve em C/C++
    * Interface serial ou USB
    * Shields são componentes que vc agrega para poder acessar
    a rede

### Embarcados
#### MCUs
    * Microcontrolador de chip único
    * Sistema operacional real time
    * Embarcado
    * Uso industrial, médico, militar, transporte
### Minicomputadores
#### Raspberry Pi
    * Computador completo
    * Hardware inteegrado em uma única placa
    * Roda SO Linux ou Windows
    * Uso doméstico e comercial

## O protocolo de comunicação
### O protocolo MQTT
    Gps Tracker
    free RTOS
    * Base na pilha do TCP/IP
    * Protoolo de mensagem assíncrona (M2M)
    * Criado pela IBM para conectar sensores de pipelines de 
    petróleo a satétiles
    * Padrão OASIS suportado pelas linguagens de programação
    mais populares.
###### (modelo cliente servidor)
    * modelo sincrono
###### (Modelo Pushish/Subscribe)
    * Separação de quem manda a mensagem de quem é o receptor 
    da mensagem
    * Capacidade de escalabilidade maior que o client-server
#### Publish
    * ter um endereço desse broker
    * topico um endereço aonde vai ser entregue a informação







