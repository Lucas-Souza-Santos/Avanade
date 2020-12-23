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






