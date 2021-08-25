const express = require('express');
const app = express();
const path = require('path');
const apiRouter = require('./routes/api.js');

const PORT = 3000;

/**
* Automatically parse urlencoded body content from incoming requests and place it
* in req.body
*/
// parse incoming requests as URL encoded data
app.use(express.urlencoded({ extended: true }));
// recognize incoming req objects as JSON objects
app.use(express.json());

// '/api' routes
app.use('/api', apiRouter);

// routes
app.get('/', (req, res) => {
  res.status(200).end();
});










/**
 * 404 handler
 */
 app.use('*', (req,res) => {
  res.status(404).send('Not Found');
});

/**
 * Global error handler
 */
app.use((err, req, res, next) => {
  console.log(err);
  res.status(500).send('Internal Server Error');
});

app.listen(PORT, () => { console.log(`Listening on port ${PORT}...`)});
module.exports = app;