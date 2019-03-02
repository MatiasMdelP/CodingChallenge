MAX = 100
N1 = 3
N2 = 5
REPLACE1 = "marley"
REPLACE2 = "mirko"
REPLACEBOTH = "marleymirko"

list = []
for i in range(1, MAX):
    list.append(i);

i = N1
while i < MAX:
    list[i-1] = REPLACE1
    i += N1

i = N2
while i < MAX:
    if list[i-1] == REPLACE1:
        list[i-1] = REPLACEBOTH
    else:
        list[i-1] = REPLACE2;
    i += N2

for e in list:
    print(e)