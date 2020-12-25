#### Arquitetura é escolha

        MQTT            MQTT
GPS     ->      Broker  ->      Worker     ->    Data store  

Eu preciso escolher o vou ultilizar como broker

App     ->      Eclipse  ->      Node.js     ->    Banco de 
Android         Mosquitto                          Dados MySQL

#### Mínimo Produto Viável

GPS     ->      HiveMQ  ->      Akka     ->    Banco de 
Embarcado                       Scala          Dados noSQL
                                JVM     

#### Solução

GPS     ->      AWS IoT ->      AWS     ->    AWS S3 
Embarcado       Core            Kinesis       
                                Firehose     


#### IoT na prática

GPS Embarcado
AWS IoT Core
AWS Data Stream
AWS Lambda
AWS ElasticCache Redis
AWS EC2
FeathersJS Backend 
Dashboard








