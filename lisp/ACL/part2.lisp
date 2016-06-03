;;Q1
(+ (- 5 1) (+ 3 7))
(list 1 (+ 2 3))
(if (listp 1) (+ 1 2) (+ 3 4))
(list (and (listp 3) t) (+ 1 2))


;;Q2
(cons 'a (cons 'b (cons 'c nil)))
(cons 'a (cons 'b '(c)))
(cons 'a '(b c))


;;Q3
(defun my-fourth (lst)
  (cadddr lst))


;;Q4
(defun get-big-num (num1 num2)
  (if (> num1 num2) num1 num2))


;;Q5
;;(a)
(defun enigma (x)
  (and (not (null x))
       (or (null (car x))
           (enigma (cdr x)))))

;;(b)
(defun mystery (x y)
  (if (null y)
      nil
      (if (eql (car y) x)
          0
          (let ((z (mystery x (cdr y))))
            (and z (+ z 1))))))


;;Q6
;;(a)
(car (car (cdr '(a (b c) d))))

;;(b)
(or 13 (/ 1 0))

;;(c)
(apply #'list 1 nil)


;;Q7
(defun my-include? (lst)
  (if lst
      (or (listp (car lst))
          (my-include? (cdr lst)))))


;;Q8
;;(a)反復
(defun ndot (num)
  (do ((i 0 (+ i 1))) ((= num i))
    (format t ".")))

;;(a)再起
(defun ndot (num)
  (if (plusp num)
      (progn
        (format t ".")
        (ndot (- num 1)))))


;;(b)反復
(defun a-num (lst)
  )

;;(b)再起
(defun a-num (lst)
  )


;;Q9
;;(a)

;;(b)
