const express = require('express');
const app = express();
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Bot en ligne bro !');
});

app.get('/webhook', (req, res) => {
  const token = req.query['hub.verify_token'];
  const challenge = req.query['hub.challenge'];
  if (token === 'awono237_token') {
    res.send(challenge);
  } else {
    res.sendStatus(403);
  }
});

app.post('/webhook', (req, res) => {
  console.log('Message recu');
  res.sendStatus(200);
});

app.listen(process.env.PORT || 3000, () => {
  console.log('Bot lance');
});
