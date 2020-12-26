const express = require('express');
const os = require('os');

const app = express();

app.get('/api/getUsername', (req, res) => res.send({ username: os.userInfo().username }));
app.post('/api/user', (req, res) => {
       var user = req.body;
       db.create(user); 
    });
app.delete('/api/setUsername', (req, res) => {
    var name = req.body;
    console.log("name: " + name);
    res.send({ username: os.userInfo().username })  
});
app.listen(process.env.PORT || 8080, () => console.log(`Listening on port ${process.env.PORT || 8080}!`));
