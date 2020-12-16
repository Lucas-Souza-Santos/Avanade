/**
 * linha 1: 
 * linha 2: o contexto ele rederizar o desenho que vai 
 * entrar dentro do canvas, colancando "2d", ele vai passar
 * tratar o arquivo em dois d. 
 */

 /**
  * A função criarBG, cria o nosso canvas: desenha e cor
  * começando com o contexto e criando a cor
  * o fillreact vai desenha o retangulo aonde vai acontecer
  * o jogo, trabalhando com 4 parametro
  */

let canvas = document.getElementById("snake");  // linha 1
let context = canvas.getContext("2d");          // linha 2
let box = 32;                                   // linha 3
let snake = [];                                 // linha 4
snake[0] = {                                    // linha 5
    x: 8 * box,                                 // linha 6
    y: 8 * box                                  // linha 7
}                                               // linha 8

/**
 * Precisamos criar uma variável para dominar a direção da
 * cobrinha
 * 
 * Nosso próxio passo é criar uma condição que o jogo fique
 * sempre atualizado
 * setInterval - funçao de tempo 
 */
let direction = "right";
let food = {
    x: Math.floor(Math.random() * 15 + 1) * box,
    y: Math.floor(Math.random() * 15 + 1) * box
}

function criarBG(){
    context.fillStyle = "lightgreen";
    // fillstyle trabalha com a cor do nosso elemento
    context.fillRect(0, 0, 16 * box, 16 * box);
    // o fillrect trab 4 param (x, y, altura, largura)
    // cada quadrado do canvas vai ter 32 pixes  que foi
    // definido na variável box
}



// função criarCobra
function criarCobrinha(){
    /**
     * O for vai percorre todo o tamanho do nosso array e
     * vai incrementar. Quando ele tiver a incrementação, 
     * ele vai pintar o corpo da nossa cobrinha de verde e 
     * vai setar o tamanho dela certinho.
     */
    for(let i = 0; i < snake.length; i++){
        /**
         * vamos passar o context novamente, só que ele 
         * estará ligado  a nossa cobrinha
         */
        context.fillStyle = "green";
        context.fillRect(snake[i].x, snake[i].y, box, box);
    }
}

function drawFood(){
    context.fillStyle = "red";
    context.fillRect(food.x, food.y, box, box);
}


document.addEventListener('keydown', update);

function update(event){
    if(event.keyCode == 37 && direction != "right")  direction = "left";
    if(event.keyCode == 38 && direction != "down" )  direction = "up";
    if(event.keyCode == 39 && direction != "left" )  direction = "right";
    if(event.keyCode == 40 && direction != "up"   )  direction = "down";
    
}


/**
 * 1- A cobrinha vai ser um array de coordenadas, agente vai
 * 2- Adicionar um elemento e ritrar o ultimo;
 * 3- Criar as coordenadas da nossa cobrinha
 */

function iniciarJogo(){

    for(let i = 1; i < snake.length; i++){
        if(snake[0].x == snake[i].x && snake[0].y == snake[i].y){
            clearInterval(jogo);
            alert("Game Over");
        }
    }

    if(snake[0].x > 15 * box && direction == "right") snake[0].x = 0;
    if(snake[0].x < 0 * box && direction == "left") snake[0].x = 16 * box;
    if(snake[0].y > 15 * box && direction == "down") snake[0].y = 0;
    if(snake[0].y < 0 * box && direction == "up") snake[0].y = 16 * box;


    criarBG();
    criarCobrinha();
    drawFood();

    let snakeX = snake[0].x;
    let snakeY = snake[0].y;

    if(direction == "right") snakeX += box;
    if(direction == "left") snakeX -= box;
    if(direction == "up") snakeY -= box;
    if(direction == "down") snakeY += box;

    if(snakeX != food.x || snakeY != food.y){
        snake.pop()
    }else{
        food.x = Math.floor(Math.random() * 15 + 1) * box;
        food.y = Math.floor(Math.random() * 15 + 1) * box;
    }

    let newHead = {
        x: snakeX,
        y: snakeY
    };
    snake.unshift(newHead);
 }

let jogo = setInterval(iniciarJogo, 100);

/**
 * mexer agora com os controle para a cobrinha não 
 * desaparecer na tela
 */

