import express from 'express';
import cutString from './lib/cutString.js';

const app = express();
const port = 8080;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/test', function(req, res) {
  const template =
    `
      <p>
        <strong>/test</strong> accepts <strong>POST</strong> requests with a string-typed parameter of <strong>string_to_cut</strong>.
        <br> Responses from this endpoint will be a key-value pair with a key of <strong>return_string</strong> and a string-typed value, derived from the request body.
      </p>
    `;
  res.send(template);
});

app.get('*', function(req, res) {
  res.redirect('/test');
});

app.post('/test', function(req, res) {
  const { string_to_cut } = req.body;

  if (string_to_cut) {
    const return_string = cutString(string_to_cut);
    res.send({ return_string });
  } else {
    res.send({ error: 'Please include with your request a string-typed parameter of `string_to_cut' });
  }
});

app.listen(port);
console.log('🥳🎬 Server started at http://localhost:' + port);