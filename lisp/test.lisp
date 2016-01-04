(defun my-length (lst)
  (if lst
    (1+ (my-length (cdr lst)))
    0))

(defun my-length (lst)
  (labels ((f (lst acc)
              (if lst
                  (f (cdr lst) (1+ acc))
                  acc)))
          (f lst 0)))
