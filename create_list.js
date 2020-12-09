
const fetch = require('node-fetch');
var listID = 0;

const event = {
    name: "JS Developers Meetup"
};

const footerContactInfo = {
    company: "company",
    address1: "675 Ponce de Leon Ave NE",
    address2: "Suite 5000",
    city: "Atlanta",
    state: "GA",
    zip: "30308",
    country: "US"
  };
  
const campaignDefaults = {
    from_name: "Gettin' Together",
    from_email: "gettintogether@example.com",
    subject: "JS Developers Meetup",
    language: "EN_US"
  };

const data = {
    name: event.name,
    contact: footerContactInfo,
    permission_reminder: "permission_reminder",
    email_type_option: true,
    campaign_defaults: campaignDefaults
  };

const postData = JSON.stringify(data);


options = {
    method: 'POST',
    headers: {
      Authorization: 'auth b4588e3bc49853201f457ef62ca27558-us7'
    },
    body: postData
};

fetch('https://us7.api.mailchimp.com/3.0/lists', options)
.then( res => res.json())
.then(res => {
    res.statusCode === 200 ?
    listID = res.id :
    console.log('failed to create mail list')
})
.catch(err => console.log(err));

console.log(listID);