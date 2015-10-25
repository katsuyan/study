num = 11
while True:
    if str(num) == str(num)[::-1] \
    and bin(num)[2:] == bin(num)[:1:-1] \
    and oct(num)[1:] == oct(num)[:0:-1] :
        print num 
        break
    num += 1
    #num += 2
