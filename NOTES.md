launch foreman
foreman start -p 3000

//working fetch call
fetch(`/api/game`)
.then(function(response) {
return response.json()
})
.then(function(myJson) {
console.log(myJson)
})

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
