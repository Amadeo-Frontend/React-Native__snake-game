# Jogo da Cobrinha em React Native 🐍🎮

## Descrição do Projeto

Este projeto consiste em um jogo da cobrinha (Snake) desenvolvido em React Native. O jogo possui uma interface simples, onde o usuário pode controlar a direção da cobrinha deslizando o dedo na tela. O objetivo é fazer com que a cobrinha coma a comida (representada por um quadrado) para aumentar o tamanho e, consequentemente, a pontuação.

## Funcionalidades 🎯

- Controle de Direção: Deslize o dedo na tela para controlar a direção da cobrinha.
- Comida: A cobrinha pode comer a comida para aumentar a pontuação e o comprimento.
- Pontuação: A pontuação aumenta cada vez que a cobrinha come a comida.
- Game Over: O jogo termina se a cobrinha atingir as bordas da tela ou colidir consigo mesma.
- Pausa e Reinício: O jogo pode ser pausado e reiniciado a qualquer momento.

## Componentes 🧩

- Header: Exibe a pontuação do jogador e botões para reiniciar e pausar o jogo.
- Snake: Renderiza a cobrinha na tela com base em sua posição.
- Food: Representa a comida na tela.
- Score: Exibe a pontuação atual do jogador.

## Demonstração

https://github.com/Amadeo-Frontend/React-Native__snake-game/assets/104178969/9626864f-691c-45c8-85cb-d9f327d37950

## Estrutura do Código 🧱

O código está estruturado em componentes e utiliza o React Native Gesture Handler para lidar com os gestos do usuário. O estado do jogo é gerenciado por meio do React Hooks, como useState e useEffect.

## Configurações e Constantes ⚙️

- Posição Inicial da Cobrinha (SNAKE_INITIAL_POSITION): Define a posição inicial da cobrinha.
- Posição Inicial da Comida (FOOD_INITIAL_POSITION): Define a posição inicial da comida.
- Limites do Jogo (GAME_BOUNDS): Define os limites da tela do jogo.
- Intervalo de Movimento (MOVE_INTERVAL): Determina o intervalo de tempo entre os movimentos da cobrinha.
- Incremento de Pontuação (SCORE_INCREMENT): Define a quantidade de pontos ganhos ao comer a comida.

## Controle de Fluxo 🎮

- moveSnake(): Função que move a cobrinha na direção especificada.
- handleGesture(event): Função que interpreta os gestos do usuário e define a direção da cobrinha.
- reloadGame(): Reinicia o jogo, resetando a pontuação, posição da cobrinha e posição da comida.
- pauseGame(): Pausa ou retoma o jogo.

## Instruções de Uso

- Clone este repositório.
- Instale as dependências utilizando npm install ou yarn install.
- Instale em seu celular o app expo go.
- Execute a aplicação com npx expo start.

## Contribuição

Contribuições são bem-vindas! Sinta-se à vontade para abrir issues para
sugestões, reportar bugs ou propor melhorias. Se deseja contribuir diretamente,
faça um fork do repositório, crie uma branch para suas modificações e abra um
pull request.

## Suporte

Se você encontrar algum problema ou tiver dúvidas sobre o uso deste projeto, por
favor, abra um issue para discussão.

Feito com ❤️ por Amadeo Bon para contribuir com a comunidade de desenvolvimento
React Native. Boa codificação!
