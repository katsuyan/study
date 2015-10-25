num = 100
card = [ False for i in range(num) ]

for i in range(2,num+1):
    for j in range(i-1, num+1, i):
        card[j] = not(card[j])

for i in range(100):
    if not(card[i]):
        print i+1
