const { Router } = require('express');
const router = Router();


router.get('/test', (req,res) => {
    const data = {
        "name": "Geronimo",
        "apellido": "Arratia"
    };
    res.json(data);
});

module.exports = router;