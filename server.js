const express = require('express');
const app = express();

// const request = require('request');
const fetch = require('node-fetch');
const bodyParser = require('body-parser');
const path = require('path');


app.use(bodyParser.urlencoded({ extended: true }));
// Static folder
app.use(express.static(path.join(__dirname, 'public')));

let PORT = process.env.PORT || 3000;
app.listen(PORT, console.log(`Server started on port ${PORT}`));





app.post('/signup', (req, res) => {
    const { firstName, lastName, email } = req.body;

    // Make sure fields are filled
    if (!firstName || !lastName || !email) {
      res.redirect('/error.html');
      return;
    }
    
    const data = {
        members: [
          {
            email_address: email,
            status: 'subscribed',
            merge_fields: {
              FNAME: firstName,
              LNAME: lastName
            }
          }
        ]
    };

    const postData = JSON.stringify(data);


    options = {
        method: 'POST',
        headers: {
          Authorization: 'auth b4588e3bc49853201f457ef62ca27558-us7'
        },
        body: postData
    };

    fetch('https://us7.api.mailchimp.com/3.0/lists/2a5ee90c52', options)
    .then(res.statusCode === 200 ?
          res.redirect('/success.html') :
          res.redirect('/fail.html'))
    .catch(err => console.log(err));
});

