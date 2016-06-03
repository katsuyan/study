(defun get-palindromes-num (&optional (i 11))
  (if (and (string= (format nil "~vR" 2 i) (reverse (format nil "~vR" 2 i)))
           (string= (format nil "~vR" 10 i) (reverse (format nil "~vR" 10 i)))
           (string= (format nil "~vR" 8 i) (reverse (format nil "~vR" 8 i))))
      i
      (get-palindromes-num (+ 2 i))))
