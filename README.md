# Aprenda ClojureScript

## Uma introdução à linguagem de programação ClojureScript em português, mostrando diversos pontos de uma forma simples.

Como falta material em português sobre Clojure e ClojureScript, espero que este tutorial possa ser um ponta 
pé inicial na linguagem para você que prefere conteúdo em português ou que tem dificuldades com o inglês. 
Ajudas com Pull Requests são bem-vidas.

## O que é Clojure?

Explicando de uma forma bem simples, ele é um dialeto de LISP, ou seja, faz parte da família e possui todo aquele 
poder de processamento de listas e roda em cima da JVM e CLR.

## E o ClojureScript?

Por Clojure ser extensível com macros (uma construção da própria linguagem) você consegue extender sintaxe,
semântica e simular coisas. Exemplificando, o `or` na JVM foi implementado a partir do `if`. 

![WAT](https://cldup.com/I-XX4sQNwq.jpg)

Isso significa na prática que não é tão difícil escrever um compilador de Clojure pra outras plataformas, 
e é ae que entra o **ClojureScript**. Ele é um compilador que possibilita escrever em Clojure emitindo JavaScript, imagine isso como o CoffeeScript, LiveScript, Elm, etc.. que existe um processo de compilação, até gerar 
o javascript final. Porém ele é um dialeto de Clojure, vale lembrar que não é 100% Clojure, tem algumas diferenças.

## Como vai funcionar o tutorial ?

O repositório contém alguns arquivos **.cljs**, você irá clonar esse repositório e então abrir os arquivos 
com um Editor ou IDE, e que por acaso não é qualquer um, todos tem syntax highlight, porém precisa de uma 
integração boa com o terminal. Aconselho usar a IDE da JetBrains com o plugin Cursive, Emacs com 
Spacemacs colocando a layer de clojure ou o LightTable,
que é bem simples de utilizar.

## License

MIT © [Victor Igor](https://github.com/VictorVoid/)
