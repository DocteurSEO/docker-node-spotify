const express = require('express');
const querystring = require('querystring');
const request = require('request');
if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config();
}
const auth = express.Router();
const redirect_uri = 'http://localhost:8000/api/auth/callback';

auth.get('/', async (req, response) => {
  response.redirect(
    'https://accounts.spotify.com/authorize?' +
      querystring.stringify({
        response_type: 'code',
        client_id: process.env.SPOTIFY_CLIENT_ID,
        scope: 'user-read-private user-read-email',
        redirect_uri,
      }),
  );
});

auth.get('/callback', function (req, res) {
  let code = req.query.code || null;

  let authOptions = {
    url: 'https://accounts.spotify.com/api/token',
    form: {
      code: code,
      redirect_uri,
      grant_type: 'authorization_code',
    },
    headers: {
      Authorization:
        'Basic ' +
        new Buffer(
          process.env.SPOTIFY_CLIENT_ID +
            ':' +
            process.env.SPOTIFY_CLIENT_SECRET,
        ).toString('base64'),
    },
    json: true,
  };
  request.post(authOptions, function (error, response, body) {
    console.log(response.statusCode);

    let uri = process.env.FRONTEND_URI || 'http://localhost:8000';
    res.redirect(uri + '?access_token=' + body.access_token);
  });
});

module.exports = auth;
