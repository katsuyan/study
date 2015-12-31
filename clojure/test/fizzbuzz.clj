(def one-to-onehandred (map inc (range 100)))

(def fizzbuzz
  (map
    (fn [x]
       (cond
         (= (mod x 15) 0) "FizzBuzz"
         (= (mod x 3) 0) "Fizz"
         (= (mod x 5) 0) "Buzz"
         :else (str x)))
    one-to-onehandred))

(doseq [x fizzbuzz] (println x))
