;; -----------------------------------------------------------------------------
;; Primeiros passos com Clojure
;; -----------------------------------------------------------------------------

;;Informação:
;;AVALIAR: Essa palavra é bem comum no mundo Clojure, pra você não ficar sem
;;entender quando eu escrever, imagine como executar aquele trecho e cuspir.
;;Por isso a importancia de uma ferramenta com boa integração, pois avaliando
;;que você ver o que acontece.

;; Declarando um namespace
;; -----------------------------------------------------------------------------
(ns primeiros-passos
  (:require [clojure.string :as string]))
;; Assim como no javascript você usa o require, você pode fazer importação de
;; diferentes namespace, e nesse caso estamos criando um alias para string.

(clojure.string/lower-case "CloJUre") ;;=> clojure

;;para não ficar tão verboso, usamos o alias criado:
(string/lower-case "CloJUre")

;;Em clojure você tem os tipos primitivos e eles avaliam retornando eles mesmo.

234        ;;=> 234
nil        ;;=> nil
"clojuree" ;;=> clojuree
:keyword   ;;=> :keyword
false      ;;=> false

;;Comentários
;;------------------------------------------------------------------------------
;;Como viu com ;; você faz um comentário, mas também tem outro caminho que é
;;precendendo com o ´#_´ e com isso o clojure pula e nao avalia.

(str "Eu posso fazer algo "  #_(string/blank? "cljs"))


;; Definições
;; ------------------------------------------------------------------------------

;; Não existe variáveis em clojure, mas o que você pode fazer parecido é criar um:

(def quantidade 4) ;;porém não varia, é imutável. Então nessa lógica, aqui,
;;variáveis não variam.

;; Criando uma função

(defn show-a [] print "A") ;;definiu uma função que retorna a letra A
;; Os [] são os parametros e em seguida o corpo da função.

(show-a) ;;=> A

;; Função anônima

;; No JavaScript é bem comum o uso de funções anônimas, principalmente na hora
;; de passar por callback.

((fn[n] (* n n ) ) 5) ;;=> 5
;; Lembre-se passamos primeiro a função numa lista e depois os arquivos ao lado
;; Nesse caso por ser uma função anônima ele colocou entre parênteses para ela
;; ser executada passando o 5 :> ( (anonima) 5 )

(defn olamundo
  "Escreva a documentação aqui..."
  ([]
   (olamundo "Mundo"))
  ([palavra]
  (str "Olá " palavra "!")))
;;str é uma função que cria strings, ou seja dá pra concatenar strings com ela.
(olamundo) ;;=> "Olá Mundo!"
;; Ao chamar a função não passando argumento ele cai na primeira opcao, que é
;; a sem argumentos, porém nela chama ela mesma, só que passando uma palavra
;; e então dessa vez irá cair na segunda onde ela concatena essa palavra com a
;; que já tem lá. 

;; Coleções
;; -----------------------------------------------------------------------------

;; Array
[3 3 2 1] ;;=> [3 3 2 1]
(conj [3 3 2] 5) ;;=> 3 3 2 5

;; Map

;; Esse é bem comum no JavaScript não é? A difença é que aqui eles são imutáveis.
;; Porém segue a mesma lógica de chave e valor.

{:idade 19 :nome "Victor Igor"} ;;=> {:idade 19, :nome "Victor Igor"}

(count {:idade 19 :nome "Victor Igor"}) ;; Verifica o numero de chaves e valores.

(def user {:nome "Carlos" :idade 60 :altura 1.6})

;; pegando valor pela chave
(get user :nome) ;;=> Carlos

;; Colocando outras chaves e valores
(def outro-mapa (assoc user :bonito false))

outro-mapa ;;=> {:nome "Carlos", :idade 60, :altura 1.6, :bonito false}

;; Removendo pela chave
(dissoc user :bonito) ;;=> {:nome "Carlos", :idade 60, :altura 1.6}

(user :nome) ;;=> Carlos
(keys user)  ;;=> (:nome :idade :altura)
(vals user)  ;;=> ("Carlos" 60 1.6)
;; Esse mapa tem essa chave?
(contains? user :idade) ;;true

;;Você tem várias maneiras de criar mapas:

(hash-map :nome "Victor" :idade 19) ;;=> {:nome "Victor", :idade 19}
(zipmap [:nome :idade] ["Victor" 19]) ;;=> {:nome "Victor", :idade 19}
(apply hash-map [:nome "Victor" :idade 19]) ;;=> {:nome "Victor", :idade 19}

;; Assim como no JavaScript, podemos criar uma arvore de chaves e valores:

(def usuario {:id "49d"
              :nome "Victor Igor"
              :amigos [
                       {:nome "Carlos"}
                       {:nome "João"}
                       {:nome "Matheus"}
                       ]
              :login {:nick "vitus"
                      :email "victor.0w3@hotmail.com" }})

(find usuario :id) ;;=> [:id "49d"]
;; Navegue pelas chaves até encontrar o que quer.
(get-in usuario [:login :nick ])  ;;=>vitus

;; Clojure tem suporte a chaves complexas, diferente de JavaScript
;; O que isso significa ? Você pode usar uma coleção pra representar uma chave.

(def foo  {[1 2] :bar [3 5] :baz})
(get foo [1 2]) ;;=> :bar

;; Estruturando
;; ------------------------------------------------------------------------------

;; Você deve conhecer o let do es6 não é ? então só cuidado, aqui ele não é
;; uma variável, é parecido, porém guarda valor para aquele bloco e utiliza.
;; Lembrando, tudo é imutável.

(let [a 1]
  a) ;;=> 1

;; o let funciona assim: [nomequerecebe valorPassadoParaEle]
;;Você pode brincar:

(let [[a b c] [1 2 3 4 5] ]
  b) ;; 2, porque a=1, b=2 , c=3

(let [[a & rest] [1 2 3 4 5]]
  rest) ;;=> 2 3 4 5

(let [{nome :nome} {:nome "Victor" :idade 2}]
  nome) ;;=> "Victor"

;; Uma forma legal de fazer isso é também usando o :keys, porque dá pra ir
;; escalando.
(let [{:keys [foo bar]} {:foo 1 :bar 2}]
  bar) ;;=> 2

;; Map, Reduce e Filter

;; Map tem a idéia de ir mapeando dado por dado de um array e passando para
;; uma função que decidirá o que fazer com esse dado e então no final gerar
;; um novo array.

(map (fn [n] (* 2 n)) [1 2 3 4 5]) ;;=> [2 4 6 8 10]

;; Reduce diferente do map que separa e cria um novo array, reduce retorna apenas
;; um dado acumulado de acordo com os valores do array.

(reduce (fn[acumulador n] (* acumulador n)) [1 2 3 4 5]) ;;=> 120

;; Filter como o próprio nome diz, filtra por dados, porém retorna um array
;; com os dados filtrados.

(filter even? [1 2 3 4 5]) ;;=> [2 4]

;; Condições If e Else
;; ------------------------------------------------------------------------------

(defn negativo? [numero]
  (if (< numero 0)
     true
     false))
(negativo? -10) ;;=> true

;; Neste caso ele a condição if não precisa de uma palavra reservada else
;; ele entende que se for verdade ele executa o comando ao lado, senão ele
;; ele pula para o próximo -> (if (condicao verdadeira) façaaqui senaoaqui)

;; Pra condições maiores existe o ´cond´
(cond
  (> 1 50) "UOW nao era pra cair aqui"
  (<= 2 1) "Nao pode cair aqui!"
  :else "A matemática funcionou") ;;=> A matemática funcionou

;; Laços de repetições
;; ------------------------------------------------------------------------------
;; No paradigma imperativo é bem comum usar uma intereção como essa:
;; for(var i = 0; i < 10; o++)
;; Clojure tem um loop primitivo chamado `loop`/`recur`. Ele permite que você
;; defina valores iniciais:
(loop [i 0 ret[]]
  (if (< i 10)
    (recur (inc i) (conj ret i))
    ret)) ;;=> [0 1 2 3 4 5 6 7 8 9]
;; Ele basicamente foi inserindo o contador e gerando uma lista com esses valores,
;; similar como um .push(i) no array em JavaScript.

;; USAR `loop`/`recur` É CONSIDERADA UMA MAU PRÁTICA, no estilo funcional pode
;; se resolver com as funções `map`,`reduce`,`filter` ou outra função que trabalhe
;; com lista.


;; Laziness
;; ------------------------------------------------------------------------------

;; Clojure tem suporte a lazily evaluated sequences. Isso significa que uma
;; sequência de elementos não está disponível, até que você precise realmente
;; deles, é conhecido de avaliação preguiçosa, e elas podem até ser infinitas
;; seguindo esse pensamento.

(->> (range 1000000000000000000)
     (filter even?)
     (map inc)
     (take 5)
     (partition 2 1)) ;;=> ((1 3) (3 5) (5 7) (7 9))

;; WTF ->> ? ?  ? ? ? ? ? ???? /o/ Que setas são essas

;; Enfim elas são coisas totalmente lindas e úteis, são macros.
;; essa se chama Thread last ->>
;; Ou seja, ela recebe uma lista e entao essa lista é passada como ultimo
;; parâmetro para as funções seguintes, como nesse exemplo, pegou o (range ...)
;; e passou para o ultimo de cada funcao a baixo dela.
;; (filter even? rang...)
;; (map inc rang...)
;; ,,,,,, já deu pra entender.

(-> "a b C D"
    string/lower-case
    (string/split #" ")
    first) ;;=> "a"
;; Essa já foi ao contrário, se chama Thread first, pois passa como primeiro
;; parâmetro para todas as funções seguintes.
