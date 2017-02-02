(ns helloworld.core)

(defn say-hello []
  (.log js/console "Hello World!"))

(say-hello)
