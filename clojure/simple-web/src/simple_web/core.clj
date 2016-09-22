(ns simple-web.core
  (:use org.httpkit.server))

(defn app [req]
  {:status 200
   :headers {"Content-Type" "text/html"}
   :body req})

(defn -main []
  (run-server app {:port 8080}))
