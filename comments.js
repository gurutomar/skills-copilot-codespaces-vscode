// Create web server
// 1. Create a web server
// 2. Create a route for '/comments'
// 3. Send a JSON response with some comments
const http = require('http');

const server = http.createServer((req, res) => {
  if (req.url === '/comments') {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ comments: ['comment 1', 'comment 2'] }));
  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('Not Found');
  }
});

server.listen(3000, () => {
  console.log('Server is listening on port 3000');
});
```

- Now, if we run the server and visit `http://localhost:3000/comments`, we should see the JSON response.

- We can also use the `fetch` function to make a request to the server and log the response to the console.

```js
fetch('http://localhost:3000/comments')
  .then((response) => response.json())
  .then((data) => console.log(data));
```

- Now, if we run the server and run the `fetch` function in the browser console, we should see the JSON response in the console.

- We can also use the `XMLHttpRequest` object to make a request to the server and log the response to the console.

```js
const xhr = new XMLHttpRequest();
xhr.open('GET', 'http://localhost:3000/comments');
xhr.responseType = 'json';
xhr.onload = () => {
  console.log(xhr.response);
};
xhr.send();
```

- Now, if we run the server and run the `XMLHttpRequest` code in the browser console, we should see the JSON response in the console.

- We can also use the `axios` library to make a request to the server and log the response to the console.

```js
axios.get('http://localhost:3000/comments')
  .then((response) => console.log(response.data));
```

- First, we need to install the `axios` library.

```sh
npm install axios
```

- Now, if we run the server and run the `axios` code in the browser console, we should see the JSON response in the console.

- We can also use the `fetch` function to make a request to the server and log the response