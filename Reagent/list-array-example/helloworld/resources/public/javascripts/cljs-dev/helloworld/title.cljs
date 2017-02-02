(ns helloworld.title)

(defn header [message]
  [:div {}
    [:h1 {:class "title"} message]])
