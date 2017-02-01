(ns helloworld.core
  (:require [reagent.core :as reagent]))

(defn app []
  [:h1 {:class "title"} "Hello People!"])

(reagent/render [app] (js/document.querySelector "#cljs-target"))
