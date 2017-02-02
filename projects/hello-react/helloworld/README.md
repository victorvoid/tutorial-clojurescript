# Olá reagent! 

 O [Reagent](https://reagent-project.github.io/) é uma biblioteca minimalista para você usar [react](https://facebook.github.io/react/) no clojurescript.
 
 
 ```clojure
 (ns helloworld.core
  (:require [reagent.core :as reagent]))

(defn app []
  [:h1 {:class "title"} "Hello People!"])
   ;; :nomedatag {propriedades} conteúdo

(reagent/render [app] (js/document.querySelector "#cljs-target"))
```
