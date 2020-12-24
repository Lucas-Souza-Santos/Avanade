# Conceito de Arquitetura em aplicações para internet

## Tipos de Arquiteturas
### Monolito
    * web app ou Mobile app
    Ela vai passar por um proxy HTTP, esse proxi vai 
    redirecionar para qual instância, e essas instâncias 
    vão está conectadas ao um banco de dados
    * A ideia dele é ter uma aplicação,  o problema é que com 
    o aumentou da demanda esse instância teria problema para 
    aguentar a quantidade de demanda.
    * É preciso ter várias instâncias para não ter problemas 
    com muitas requisições.
    * Mais simples

+--------------------------------------------+
|                   Sevidor                  |
|               +--------------+    +------+ |
|               |Aplicação     |    |Proxi | |  +-----+
|+-----+        |(instância #1)|    |      | |  |Web  |  
||banco|        +--------------+    |      | |  |App  |
|| de  |        +--------------+    |HTTP  | |  +-----+
||Dados|        |Aplicação     |    |      | |
|+-----+        |(instância #2)|    |      | |  +------+
|               +--------------+    |      | |  |Mobile|
|               +--------------+    |      | |  |App   | 
|               |Aplicação     |    |      | |  +------+
|               |(instância #3)|    |      | |
|               +--------------+    +------+ |
+--------------------------------------------+


### Microserviços #1
    * Vantagens de ter microserviços ou serviços menores
    * Vantagens de serviços que fazem coisas menores
    * Não está preso a uma certa tecnologia
    * cada caixa pequena do NODO, serve como servia o 
    monolito
    * Vou ter vários serviços e esses serviços tem que 
    conversar entre eles.
    * cada serviço pode chamar outros serviços, pode ser 
    por http ou outro tipo de requisição.

### Microserviços #2
    * não temos a comunicação entre os NODOS
    * temos agora um Message Broker
    * A vantagem é que um serviço não vai está conectado
    no outro, e tudo vai passar pro um menssage broker
    * Se o serviço 1 precisa se comunicar com o serviço 2,
    ele vai até o menssage broker e deixa uma mensagem;
    se caso o serviço 2 não estiver online, e depois quando
    for restabelecida a comunição, e vai até o menssage broker
    e verifica as mensagens que tem pra ele.
    * fica mais fácil trocar os serviços, se for necessário.

#### desvantage
    * Toda plataforma fica refem do message broker, se der 
    algum problema, toda plataforma sofre com isso.

### Microserviços #3
    * Ao invés do proxy http se comunicar com um determinado
    serviço, ele vai se comunicar com um gerenciador de 
    pipeline.
    * tem aplicações separadas, cada serviço com sua 
    dependência diferente, ter o menor código possível, 
    evitar bugs, melhor perfomace, usar a melhor tecnologia.

