Primeiros Passos com Clojure
============================

![](https://media.giphy.com/media/2D4tYGhHKFYre/giphy.gif)


- [Requisitos](#requisitos)
- [Hello World](#hello-world)
- [Emacs e Clojure](#emacs-e-clojure)
- [Primeiros passos em Clojure](#primeiros-passos-em-clojure)
- [Compilador do ClojureScript](#compilador-do-clojurescript)

Requisitos
---------------------------

Presica basicamente ter o Java instalado, e a ferramenta [Leiningen](leiningen.org).

O **Leiningen** é uma mistura de Gerenciador de Dependencias e um Task Runner, só imaginar como o `npm` e o `gulp` juntos.

Execute:

```bash
lein repl
```

Como python, node, ruby, etc o Clojure tem um [REPL](https://media.giphy.com/media/INNAFDFGakn0A/giphy.gif) e você 
consegue interagir com o seu programa rodando.

Hello World
------------

```clj
user=> "Hello World"
"Hello World"
```

```clj
user=> (+ 1 2) ;; isso é um comentário em clojure
3
```

Basicamente o **+** é uma função que recebeu o 1 e 2 como parâmetro e cuspiu o resultado da soma. Bonito não é?

Emacs e Clojure
----------------

Não vamos ficar codando em um REPL no terminal e sim num Editor/IDE, por isso você precisa ter um com um bom suporte, para avaliar cada expressão.

Como o emacs por exemplo:

![](https://i.stack.imgur.com/ptdJP.gif)

Se nunca usou emacs [SIGA ESSAS DICAS](https://github.com/victorvoid/aprenda-clojurescript/blob/master/emacs.md).

Primeiros passos em Clojure
---------------------------

Se já se habituou com emacs ou qualquer outro Editor/IDE, segue o arquivo contendo algumas introduções do modo de programar 
em clojure, e apenas vai avaliando cada trecho do código para ver funcionando.

[primeiros-passos.clj](https://github.com/victorvoid/aprenda-clojurescript/blob/master/primeiros-passos/primeiros-passos.clj)

Compilador do ClojureScript
---------------------------

Como estamos iniciando na linguagem, e assim como nas outras, vamos ver exemplos sem nenhuma ferramenta adicional como o [Leiningen](leiningen.org), e ver direto com o compilador, é importante saber como compilamos ClojureScript compiler.

[Hello World usando o compilador de ClojureScript](https://github.com/victorvoid/aprenda-clojurescript/blob/master/primeiros-passos/compilador-clojurescript.md)
