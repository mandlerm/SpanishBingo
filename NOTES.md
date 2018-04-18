ROUTING

1. when home is clicked, change what is shown to WelcomeContainer
2. when category is selected, change ROUTE NAME to match category
   2b. when category is selected, set STATE boardSize to 16.
3. when Easy is selected - re-arrange board to be 3x3 grid
   GAME function

4. display cards - set number based on level.cardNumber
5. display word in wordbar
   2b. set time for displaying word
6. on card click, say word and animate
7. compare card to wordbar - deal with accordingly.

launch foreman
foreman start -p 3000

TIMER:
https://www.npmjs.com/package/react-countdown-now#date

///working fetch call
fetch(`/api/game`)
.then(function(response) {
return response.json()
})
.then(function(myJson) {
console.log(myJson)
})

##//fetch games
fetch(`/api/games`)
.then(function(response) {
return response.json()
})
.then(function(myJson) {
console.log(myJson)
})

##//fetch cards
console.log("cards")
fetch(`/api/cards`, {
category: "sample" ##make this dynamic. set category to whatever button is selected.
})
.then(function(response) {
return response.json()
})
.then(function(myJson) {
console.log(myJson)
})
}
///end of working fetch calls

//notes from example app

function search(query) {
return fetch(`/api/food?q=${query}`, {
accept: 'application/json',
}).then(checkStatus)
.then(parseJSON);
}

function search(query, cb) {
return fetch(`api/food?q=${query}`, {
accept: 'application/json',
}).then(checkStatus)
.then(parseJSON)
.then(cb);
}

//my fetch calls
//testing api call
// console.log("fetching game options")
// let game = fetch(`/api/game`, {
// accept: "application/json"
// })
// .then(checkStatus)
// .then(parseJSON)
// }
console.log('game options:', game)

console.log('fetching levels')
game = fetch(`/api/level`)
.then(function(response) {
return response.json();
})
.then(function(myJson) {
console.log(myJson);
});
// .then(response), {
// accept: 'application/json',
// }).then(checkStatus)
// .then(parseJSON)
// }
// console.log(level)
//
// console.log('fetching cards')
// game = fetch(`/api/cards`, {
// accept: 'application/json',
// }).then(checkStatus)
// .then(parseJSON)
// }
// console.log(cards)
// }

//sample set up from tutorial
function checkStatus(response) {
if (response.status >= 200 && response.status < 300) {
return response;
}
const error = new Error(`HTTP Error ${response.statusText}`);
error.status = response.statusText;
error.response = response;
console.log(error); // eslint-disable-line no-console
throw error;
}

function parseJSON(response) {
return response.json();
}

const Client = { search };
export default Client;

BOARD shuffledGameArray // componentWillMount() {
// let shuffledGameArray = this.props.state.cards.cards.sort(function(a, b) {
// return 0.5 - Math.random()
// })
//
// //going to return 9 cards for easy game, 16 cards for standard game.
// let leveledBoard = shuffledGameArray.slice(
// 0,
// this.props.state.level.cardNumber
// )
// this.props.currentGameBoard(leveledBoard)
//
// }
