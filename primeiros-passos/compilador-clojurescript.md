# Compilador

De início, vamos ver como executamo nossos códigos com o compilador de ClojureScript, sem nenhuma ferramenta adicional 
de build como o [boot](http://boot-clj.com/), [leiningen](http://leiningen.org/) ou [cljbuild](https://github.com/emezeske/lein-cljsbuild).

Lembrando que ele compila tanto para que o browser entenda e para o [Node.js](https://nodejs.org/en/). :smirk: Isso mesmo, 
se você tá pensando no que to pensando, dá sim..

## Instalando o compilador

### Pré requisitos
  - Tenha instalado o java8
  - nodejs(para executarmos nossos .js)

Para instalar é muito fácil, ele é apenas um .jar e pode ser baixado usando o **wget**:

> wget https://github.com/clojure/clojurescript/releases/download/r1.9.36/cljs.jar

## Primeiro projeto

    mkdir -p ola-mundo/src/ola-mundo
    touch ola-mundo/src/ola-mundo/core.clj
    
```
├── □ ola-mundo
|   |     
|   ├── □ src
|   |   |   ├── □ ola-mundo
|   |   |   |   └── core.clj
```

Coloque no `core.clj` o seguinte código:

```clojure
(ns ola-mundo.core) ;;namespace

(enable-console-print!) ;;abilitando o print do JavaScript -> Console <classe>

(println "Olá mundo!")
```

Agora só vamos precisar de um arquivo de configuração do build.

```
├── □ ola-mundo
|   |     
|   ├── □ src
|   |   |   ├── □ ola-mundo
|   |   |   |   └── core.clj
|   └── build.clj   
```


```clojure
(require '[cljs.build.api :as b]) ;;precisamos importar o namespace cljs.build para usar a funcao de build
(b/build "src"
 {:output-to "app.js"
  :output-dir "out/"
  :source-map true
  :main 'alo-mundo.core
  :verbose true
  :optimizations :none})

```

### Compilando
Deixe o compilador em uma pasta fora do projeto

    java -cp ../pastadocompilador/cljs.jar:src clojure.main build.clj
    
####Argumentos
- `clojure.main`: nos permite executar facilmente um arquivo clojure
- `buid.clj`: nosso arquivo de build

Sim, agora você vai ter um arquivo `.js` gerado chamado `app.js` de acordo como configurou no `build.clj`.

### Rodando no browser

```
├── □ ola-mundo
|   |     
|   ├── □ src
|   |   |   ├── □ ola-mundo
|   |   |   |   └── core.clj
|   ├── build.clj
|   └── index.html
```

```html
<!-- index.html -->
<!DOCTYPE html>
<html>
  <header>
    <meta charset="utf-8" />
    <title>Aprendendo ClojureScript</title>
  </header>
  <body>
    <script src="app.js"></script>
  </body>
</html>
```

![](https://media.giphy.com/media/3NnnS6Q8hVPZC/giphy.gif)
