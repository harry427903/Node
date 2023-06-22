const express = require('express');

const app = express();

app.use('/', (req, res, next) => {
  console.log('This always runs');
  next();
});

app.use('/about-product', (req, res, next) => {
  console.log("in another parle -G  middleware");
  res.send('<h1>Hello from about product</h1>');
});

console.log("Hello from the body");
app.listen(3000);
