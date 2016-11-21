# Primeiros Passos com Clojure

EU QUERO APRENDER CLOJURESCRIPT E NÃO CLOJURE!

![](http://i.giphy.com/ORIAL2zdffo4g.gif)

Calma, se você não sabe nada de Clojure, eu recomendo que aprenda um pouco antes que inicie com o ClojureScript.

## O que preciso para rodar ?

Basicamente Java, e a ferramenta [Leiningen](leiningen.org).

O **Leiningen** é uma mistura de Gerenciador de Dependencias e um Task Runner, só imaginar como o `npm` e o `gulp` juntos.

Execute:

```bash
lein repl
```

Como python, node, ruby, etc o Clojure tem um [REPL](https://en.wikipedia.org/wiki/Read%E2%80%93eval%E2%80%93print_loop) e você 
consegue interagir com o seu programa rodando.

## Hello World

```clj
user=> "Hello World"
"Hello World"
```

```clj
user=> (+ 1 2) ;; isso é um comentário em clojure
3
```

Basicamente o **+** é uma função que recebeu o 1 e 2 como parâmetro e cuspiu o resultado da soma. Bonito não é?

Mas não vamos ficar codando em um REPL e sim num Editor/IDE, por isso precisa ter uma com um bom suporte, para avaliar cada expressão.

Agora abra o arquivo **primeiros-passos.clj**.
