## A flexibilidade dos tópicos
    * protocolo: mqtt
    * ://
    * broker: broker.io
    * / 
    * user identifier: a6g319
    * /
    * sensor: gps
    * /
    * Information Type: position

#### publish
    * pub mqtt://broker/a6fb45/gps/position

#### subscribe
    * mqtt://broker/user/gps/position

Temos que ter alguns níveis de garantia que esse protocolo vai
funcionar

#### QoS 0
                    Publish
    MQTT Client     --->        MQTT Broker

    * Nível mínimo de menor esforço
    * Sem garantia de entrega
    * Mensagem não é retransmitida
#### QoS 1
                    Publish
    MQTT Client     --->        MQTT Broker
                    Puback
    * Garante que a mensagem foi entregue no mínimo uma vez 
    ao recebedor
    * Mensagem pode ser retransmitida se não houver 
    confirmação de entrega

#### QoS 2
   +-----------+     Publish ->       +-------------+
   |MQTT Client|     Pubrec  <-       | MQTT Broker |
   +-----------+     Pubrel  ->       +-------------+
                     Pubcamp <-
    * Garante que a mensagem foi entregue no minimo uma vez 
    ao recebedor
    * Mensagem pode ser retransmitida se não houver 
    confirmação de entrega.

## Cloud
    * Grande e cada vez maior número de devices conectados
    * TBs ou PBs de informações
    * Potencial de escala global


         worker -> Data store
        /
broker 
        \
         worker -> cache -> tela

worker é a minha aplicação, meu codigo
