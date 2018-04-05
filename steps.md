1. make playing card call dynamic (how to pass in variable name)

ADD DB TABLE -- GAME TYPE: Flashcard, Matching, Bingo

1. home screen. welcome message. explain game.
   buttons display.

* select game category
* alter category button (to show it was selected)
  now display level choice
* fetch game cards (based on cat. choice - passing in the db_name to rails)

(other game options -- flashcard, card matching, bingo)

2. Displaying first game:

* iterate through all playing cards - passing them through card Component
* display those cards on the screen
  * add animations
*

FLASHCARD:
pictures display.
click on card, it flips, displays spanish word and spanish audio plays

CARD MATCH:
Only use 8 cards: (need a random method to choose 8 and store them in state as current_game) - 8 pictures show, 8 words show. - when a card is clicked - spanish word is said - select 2 cards - if they match == points. - if they don't match, animation of error, cards go back down. keep playing

BINGO
All pictures display
Word appears and speaks at top of screen. Said 2 times, 3 second delay
IF they select the correct card, points
if they select the wrong card, animate error. no points
