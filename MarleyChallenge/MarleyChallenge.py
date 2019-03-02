MAX = 100
N1 = 3
N2 = 5
REPLACE1 = "marley"
REPLACE2 = "mirko"
REPLACEBOTH = "marleymirko"

for i in range(1, MAX):
	if i % N1 == 0 and i % N2 == 0:
		print(REPLACEBOTH)
	elif i % N1 == 0:
		print(REPLACE1)
	elif i % N2 == 0:
		print(REPLACE2)
	else:
		print(i)
