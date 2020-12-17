const { Router, response } = require('express');
const router = Router();

const fech = require ('node-fetch');

router.get('/', async (req, res) =>{
    const response = await fech('https://jsonplaceholder.typicode.com/users');
    const users = await response.json();
    //console.log (users);
    //res.send("Users");
    res.json(users);
});

module.exports = router;