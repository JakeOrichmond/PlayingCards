$(document).ready (function(){


var suits = ['clubs','spades','hearts','diamonds'];
var ranks = ['ace','1','2','3','4','5','6','7','8','9','10','jack','queen','king'];
var decks = [];

suits.forEach(function(suit){
  ranks.forEach(function(rank){
    decks.push(rank + " of " + suit);
  });
});

decks.forEach(function(deck){
  $('ul#cards').append('<li>' + deck + '</li>');
});


});
