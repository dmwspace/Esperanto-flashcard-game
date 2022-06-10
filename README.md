# Esperanto flash card game

This is an Esperanto Flash Card App

The game pulls 10 random English words from a JSON file and present them one at a time while the user types in the appropriate Esperanto cognate for each word. The score is kept and 8 out of 10 correct is considered a winning condition.

### Why I created this

I created this game/app because I like the Esperanto language. It is an artificial language that was created in 1887 and was specifically constructed to be used as a second language. Esperanto is proven to be much easier to learn than natural languages due to its phonetic spelling, completely regular grammar, and intuitive rules governing word formation. There are hundreds of thousands of Esperanto speakers living on all six populated continents of the world, connected only by their willingness to extend 'a linguistic handshake' to the diverse group known as the Esperantujo.

### Technologies used

This game was created using vanilla HTML, CSS, and Javascript. The word list is a local JSON file that I created.

### Problems

The biggest problem that I had was in styling the app for tablets or smartphones. I found out that CSS media queries were the way to go. After I scaled down the size of all of the elements when the screen width was less than 760 pixels, it looked good.


