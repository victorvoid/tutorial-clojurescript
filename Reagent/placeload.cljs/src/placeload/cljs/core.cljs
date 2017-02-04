(ns placeload.cljs.core
  (:require [reagent.core :as reagent :refer [atom]]
            [clojure.string :as str]))

(enable-console-print!)

(defonce app-state (atom {:text "Placeload" :container "" :fullheight "0" :fullwidth "200px"}))

(defn app []
  [:p "Placeload"]
  [:div {:class "userPlaceload"}])

(reagent/render-component [app]
                          (. js/document (getElementById "app")))

(defn remove-unit [unit]
  (js/parseInt unit))

(defn place-background []
  [:div {:class "placeload-background" :style {:height (:fullheight @app-state)}}])

(defn side-right-element [width height]
  [:div {:class "placeload-masker"
         :style {
                 :width (str (- (.-offsetWidth (:container @app-state)) (remove-unit width)) "px")
                 :height height
                 :top (str (- (remove-unit (:fullheight @app-state)) (remove-unit width)) "px")
                 :right 0}}])

(defn Placeload [container]
  (swap! app-state assoc :container (. js/document (querySelector ".userPlaceload")))
  (this-as this
    (set! (.-store this) (array))
    this))

  (set! (.. Placeload -prototype -draw)
        (fn [dataComponent]
          (.log js/console "drawing...")
          (swap! app-state assoc :fullheight ( str ( + (remove-unit (get dataComponent :height)) (remove-unit (:fullheight @app-state))) "px"))
          (.log js/console (:fullheight @app-state))
          (reagent/render-component [place-background]
                                    (. js/document (querySelector ".userPlaceload")))
          (reagent/render-component [side-right-element (get dataComponent :width) (get dataComponent :height)]
                                    (. js/document (querySelector ".placeload-background")))))
;;Using..
(def placeload (Placeload. ".userPlaceload"))
(.draw placeload {:width "200px" :height "200px"})
