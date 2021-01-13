n = int(input())
a = [0]*(n)
for i in range(n):
    a[i]=int(input())
for t in range(n):
    if t==4:
        print(a[4])
    for i in range(n):
        try:
            if a[i]>a[1+i]:
                a[i],a[i+1]=a[i+1],a[i]
        except:
            pass