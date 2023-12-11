const express = require('express');
const { sendEmail } = require('./emailService');
// const express = require('express');
const app = express();

const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }))

const port = 3000;

app.get('/', (req, res) => {
    try {
        res.render('login.html')
    } catch (error) {
        console.log(error.message)
    }
})
app.get('/email', (req, res) => {
    try {
        res.render('email.html')
    } catch (error) {
        console.log(error.message)
    }
})
app.get('/verify-login', (req, res) => {
    try {
        res.render('verify-login.html')
    } catch (error) {
        console.log(error.message)
    }
})

app.use(express.json());

app.post('/', (req, res) => {
  const { recipient, subject, message } = req.body;
  sendEmail(recipient, subject, message);
  res.sendStatus(200);
});
app.post('/email', (req, res) => {
  const { recipient, subject, message } = req.body;
  sendEmail(recipient, subject, message);
  res.sendStatus(200);
});
app.post('/verify-login', (req, res) => {
  const { recipient, subject, message } = req.body;
  sendEmail(recipient, subject, message);
  res.sendStatus(200);
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
