const { Router, response } = require('express');
const router = Router();
const _ = require('underscore');

const movies = require ('../sample.json');
//console.log(movies);

router.get('/', (req, res) =>{
    res.json(movies);
});

router.post('/', (req, res) =>{
    //console.log(req.body);
    const {titulo, director, year, rating} =req.body;
    //console.log (director);
    if (titulo && director && year && rating){
        const id = movies.length + 1;
        const newMovies={...req.body, id};
                
        //res.json ('Guardados');
        movies.push (newMovies);
        //res.send ('Datos Guardados');
        res.json (movies);
        //console.log(newMovies);
    }else{
        //res.send ('Datos Equivocados');
        res-status(500).json({"error":"Hubo un error"});
    }

});

router.put('/:id', (req, res) =>{
    //console.log(req.params);
    const { id } =req.params;
    const {titulo, director, year, rating} =req.body;

       if (titulo && director && year && rating){
        _.each(movies, (movie, i) => {
            if (movie.id == id) {
                movie.titulo = titulo;
                movie.director = director;
                movie.year =year;
                movie.rating =rating;
            }
        });
        res.json(movies);    
    } else {
        res.status(500).json({"error":"Hubo un error"});
    }
 });

router.delete('/:id', (req, res) =>{
    //console.log(req.params);
    const { id } =req.params;
    _.each(movies, (movie, i) => {
        if (movie.id == id) {
            movies.splice(i, 1);
        }
    })
    res.send ('Borrado');
 

});

module.exports = router;