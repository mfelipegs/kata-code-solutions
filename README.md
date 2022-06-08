# kata-code-solutions
My solutions to katas on CodeWars 

[Visit my profile](https://www.codewars.com/users/mfelipegs)

## Convert a string to number

## Count of positives / sum of negatives

## Define a card suit
### Python solution
- ***Link:*** https://www.codewars.com/kata/define-a-card-suit/
- ***You get any card as an argument. Your task is to return the suit of this card (in lowercase).***
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

## Even or odd

## Remove string spaces
