(ns async-tea-party.core
  (:require [clojure.core.async :as async]))

(def tea-channel (async/chan))
