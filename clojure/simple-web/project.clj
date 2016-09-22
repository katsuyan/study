(defproject simple-web "0.1.0-SNAPSHOT"
  :description "FIXME: write description"
  :url "http://example.com/FIXME"
  :license {:name "Eclipse Public License"
            :url "http://www.eclipse.org/legal/epl-v10.html"}
  :dependencies [[org.clojure/clojure "1.8.0"]
                 [compojure "1.5.1"]
                 [http-kit "2.1.18"]
                 [ring "1.5.0"]]
  :plugins [[lein-ring "0.9.7"]]
  :main simple-web.core
  :ring {:handler simple-web.handler/app})
