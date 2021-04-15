// const express = require('express')

// // express app
// const app = express();
// app.use(express.static(__dirname + '/views'));
// // listen for requests
// app.listen(3000);

// app.get('/', (req, res) => {
//    // res.send('<p>Hello World</p>');
//     res.sendFile('./views/login.html', {root: __dirname})
// });

// app.get('/register', (req, res) => {
//   //  res.send('<p>Register</p>');
//   res.sendFile('./views/register.html', {root: __dirname})
// });

// app.get('/members', (req, res) => {
//     //  res.send('<p>Register</p>');
//     res.sendFile('./views/members.html', {root: __dirname})
//   });

// // 404 page
// app.use((req, res) => {
//     res.status(404).send('<h1>404: Not Found :)</h1>')
// })