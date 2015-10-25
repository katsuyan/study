op = ["", "+", "-", "*", "/"]
#op = ["", "*"]

for i in range(1000, 10000):
    c = str(i)
    for j in op:
        for k in op:
            for l in op:
                st = c[0] + j + c[1] + k + c[2] + l + c[3]
                if len(st) > 4:
                    try:
                        num = eval(st)
                    except:
                        num = None
                    if str(i) == str(num)[::-1]:
                        print "{}({})".format(i, st)
