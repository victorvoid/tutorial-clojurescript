(ns helloworld.core
  (:require [reagent.core :as reagent]
            [helloworld.title :refer (header)]))

(def app-state
  (reagent/atom
               {:message "from state"
                :users [{:name "Victor Igor"}
                        {:name "Lucas Silva"}
                        {:name "Jose Souza"}
                        {:name "Marcio Cunha"}]}))

(def click-count (reagent/atom 0))

(defn users-list [users]
  [:div {:class "items-list"}
   (for [user users]
     [:div.user
      [:p {:style {:color "#1e1e1e"}} (:name user) ]])])

(defn count-view []
  [:div
   "The atom " [:code "click-count"] " has value: "
   @click-count ". "
   [:input {:type "button" :value "Click me" :on-click #(swap! click-count inc)}]])

(defn app []
  [:div {:class "container"}
   [header (:message @app-state)]
   [users-list (:users @app-state)]
   [count-view]])

(reagent/render [app] (js/document.querySelector "#cljs-target"))
