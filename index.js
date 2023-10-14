const express = require('express');
const app = express();
const port = process.env.PORT || 8080;
const target = process.env.TARGET || 'World!';

// https://www.cloudskillsboost.google/course_sessions/5490090/labs/320978

app.get('/', (req, res) => {
  console.log('Hello world received a request.');
  
  res.send(`Hello ${target}!`);
});

app.listen(port, () => {
  console.log('Hello world listening on port', port);
});
