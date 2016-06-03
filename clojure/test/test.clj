(#(nil? (get %2 %1 -1)) :a {:a nil :b 2})

(get {:a nil :b 2} :b -1)


(defn qsort [cmp [piv & rst :as coll]]
  (if (empty? coll)
    []
    (#(concat (qsort cmp (%1 true)) [piv] (qsort cmp (%1 false)))
    (group-by #(boolean (cmp %1 piv)) rst))))

(qsort < [4 6 1 3 9 4 8 2])
(qsort #(< (count %1) (count %2)) ["aaa" "aa" "aaaa" "a"])
