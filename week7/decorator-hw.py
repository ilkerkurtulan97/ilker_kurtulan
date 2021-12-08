def my_awesome_decorator(fun):
  def wrapped(*args):
    return not fun(*[i+1 for i in args])
  return wrapped

@my_awesome_decorator
def mod_batch(*numbers):
  for i in numbers:
    if(i % 3 != 0):
      return False
  return True

print(mod_batch(2, 8, 11))
print(mod_batch(3, 6, 12))