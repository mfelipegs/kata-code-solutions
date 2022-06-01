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
