// Create web server
const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// index
app.get('/', (req, res) => {
  res.send('Hello World');
});

// get comment data
app.get('/comment', (req, res) => {
  res.json({message: 'This is a comment data'});
});


app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});