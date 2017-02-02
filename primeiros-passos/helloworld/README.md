# Olá mundo

```clojure
(ns helloworld.core)

(defn say-hello []
  (.log js/console "Hello World!"))

(say-hello)

```

Você pode fazer tanto `(.log js/console "..."` ou `(js/console.log "...."`

Você tem acesso a qualquer método nativo do javascript através do `js/`, como por exemplo: 

```clojure
  (js/setTimeout #(swap! seconds inc) 1000)
```
