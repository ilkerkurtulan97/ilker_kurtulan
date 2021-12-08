import random
import math

def random_number_generator(n, l):
  checkSet = set()
  lengthMin = 10**(l)
  lengthMax = (10**(l+1))-1
  i = 0
  while i < n:
    randomNumber = random.choice(range(lengthMin,lengthMax))
    if (randomNumber not in checkSet):
      checkSet.add(randomNumber)
      i = i + 1

  if(len(checkSet) == n):
    yield checkSet


myRandomNumbers = random_number_generator(2,3)
for i in myRandomNumbers:
  print(i)
