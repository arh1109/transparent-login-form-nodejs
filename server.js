const express = require('express')

//const db = require('./db.js');

const app = express()

app.use(express.json())
app.use(express.static(__dirname + '/views'));


app.listen(process.env.PORT || '8080', () => {
    console.log(`Server is running on port ${process.env.PORT || 3000}`);
    
})

app.get('/', (req, res) => {
    //res.send('<p>Hello World</p>');
    res.sendFile('./views/login.html', {root: __dirname})
});

app.get('/login', (req, res) => {
    //res.send('<p>Hello World</p>');
    res.sendFile('./views/login.html', {root: __dirname})
});
 
app.get('/register', (req, res) => {
   //  res.send('<p>Register</p>');
   res.sendFile('./views/register.html', {root: __dirname/views})
 });
 
// app.get('/members', (req, res) => {
//      //  res.send('<p>Register</p>');
//      res.sendFile('./views/register.html', {root: __dirname})
//    });

// app.get('/:id', async(req, res, next) => {

//     try {
//         let results = await db.one(req.params.id);
//         res.json(results);
//     } catch(e) {
//         console.log(e);
//         res.sendStatus(500);
//     }
    

// })

// 404 page
app.use((req, res) => {
    res.status(404).send('<h1>404: Not Found :)</h1>')
})