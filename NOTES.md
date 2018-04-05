launch foreman
foreman start -p 3000

function search(query) {
return fetch(`/api/food?q=${query}`, {
accept: 'application/json',
}).then(checkStatus)
.then(parseJSON);
}
