const express = require('express');
const app = express();
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Bot WhatsApp awono237 en ligne !');
});

app.get('/webhook', (req, res) => {
  if (req.query['hub.verify_token'] === 'awono237_token') {
    res.send(req.query['hub.challenge']);
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
