# kata-code-solutions
My solutions to katas on CodeWars 
Test algorithms are available in their respective katas in Codewars.
[Visit my profile](https://www.codewars.com/users/mfelipegs)

## Convert a string to number

## Count of positives / sum of negatives
- ***Link:*** https://www.codewars.com/kata/576bb71bbbcf0951d5000044
- ***Description:*** Given an array of integers, return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers. 0 is neither positive nor negative. If the input is an empty array or is null, return an empty array.
### Python solution
```python
def string_to_number(s):
    number = int(s)
    return number
```

## Define a card suit
- ***Link:*** https://www.codewars.com/kata/define-a-card-suit/
- ***Description:*** You get any card as an argument. Your task is to return the suit of this card (in lowercase).
### Python solution
- ***The solution I made:***
```python
def define_suit(card):
    if "C" in card:
        return("clubs")
    elif "D" in card:
        return("diamonds")
    elif "H" in card:
        return("hearts")
    elif "S" in card:
        return("spades")
    else:
        return None
```

### JavaScript solution
- ***A simple solution with condition structure:***
```js
function defineSuit(card) {
  if(card.match("♣"))
    {
      return("clubs");
    }
  else if(card.match("♦"))
    {
      return("diamonds");
    }
  else if(card.match("♥"))
    {
      return("hearts");
    }
  else if(card.match("♠"))
    {
      return("spades");
    }
  else
    {
      return;
    }
}
```

## Detect pangram
- ***Link:*** https://www.codewars.com/kata/545cedaa9943f7fe7b000048
- ***Description:*** A pangram is a sentence that contains every single letter of the alphabet at least once. For example, the sentence "The quick brown fox jumps over the lazy dog" is a pangram, because it uses the letters A-Z at least once (case is irrelevant). Given a string, detect whether or not it is a pangram. Return True if it is, False if not. Ignore numbers and punctuation.
### Python solution
```python
import string

def is_pangram(s):
    alphabet = "abcdefghijklmnopqrstuvwxyz"
    for char in alphabet:
        if char not in s.lower():
            return False
    return True

```

## Even or odd
- ***Link:*** https://www.codewars.com/kata/53da3dbb4a5168369a0000fe
- ***Description:*** Create a function that takes an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers.
### Python solution
```python
def even_or_odd(number):
    if(number % 2):
        return("Odd")
    else:
        return("Even")

```
### JavaScript solution
```js
function even_or_odd(number) {
  if(number % 2 == 0)
    {
      return("Even");
    }
  else
    {
      return("Odd");
    }
}

```

## Remove string spaces
- ***Link:*** https://www.codewars.com/kata/57eae20f5500ad98e50002c5
- ***Description:*** Simple, remove the spaces from the string, then return the resultant string.
### Python solution
```python
def no_space(x):
    newstring = x.replace(" ", "") #method to replace spaces with nothing
    return newstring

```
