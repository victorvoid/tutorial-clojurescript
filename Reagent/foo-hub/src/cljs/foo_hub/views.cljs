(ns foo-hub.views
    (:require [re-frame.core :as re-frame]))

;; Input Search

(defn input-search []
    (fn []
      [:form
      [:input {:name "search"
                :placeholder "Search GitHub"
                :type "search"
                :style {:width "80%"
                        :height "38px"
                        :padding-left "5px"
                        :border "1px solid #ddd"
                        :outline "none"
                        :transition "all .2s"
                        :margin-right "5px"}
                :on-change #(re-frame/dispatch [:search-key (-> % .-target .-value)])}]
      [:input {:type "submit"
                :value "Search"
                :class "btn btn__state--default"}]]))


;; home

(defn home-panel []
    (fn []
      [:section {:style {:padding "100px"
                         :max-width "600px"
                         :margin "0 auto"
                         :text-align "center"}}
       [:img {:title "Github's Octocat mascot"
              :style {:max-width "300px"}
              :alt "Mascot of the GitHub"
              :src "http://cameronmcefee.com/img/work/the-octocat/codercat.jpg"}]
       [:h2 {:style { :font-weight "300"}} "Search more than "
        [:strong "19M"] " users"]
       [input-search]]))


;search repositories

(defn search-repositories-container []
  (fn []
    [:section {:class "repositories__container "}
     [:h2 {:class "found__title "} "We’ve found 49707 repository results"]
     [:ul {:class "search__list"}
      [:li {:class "search__item"}
       [:h3 {:class "search__item__name"}
        [:a "victor/space-jekyll-template"]]]]]))

(defn search-repositories-aside []
  (fn []
    [:aside {:class "search__menu"}
     [:nav
      [:ul {:class "search__menu--block"}
       [:li {:class "search__menu--item"}
        [:a {:title "Will list all repositories of your Search"}
         [:svg {:width "40" :height "40" :class "icon-repositories"}
          [:use {:xlinkHref "#repository"}]] "Repositories"
         [:span "4000"]]]
       [:li {:class "search__menu--item"}
        [:a {:title "Users will be listed"}
         [:svg {:width "40" :height "40" :class "icon-user"}
          [:use {:xlinkHref "#user"}]] "Users"
         [:span "3000"]]]]]]))

(defn search-repositories-list []
  (fn []
    [:section {:class "search__container"}
     [input-search]
     [search-repositories-aside]
     [search-repositories-container]]))


;; about

(defn about-panel []
  (fn []
    [:div "This is the About Page."
     [:div [:a {:href "#/"} "go to Home Page"]]]))


;; main

(defn- panels [panel-name]
  (case panel-name
    :home-panel [home-panel]
    :about-panel [about-panel]
    :search-repositories-list [search-repositories-list]
    [:div "not found"]))

(defn show-panel [panel-name]
  [panels panel-name])

(defn main-panel []
  (let [active-panel (re-frame/subscribe [:active-panel])]
    (fn []
      [show-panel @active-panel])))
