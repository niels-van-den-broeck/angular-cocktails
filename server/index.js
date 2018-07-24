const express = require('express');
const bodyParser = require('body-parser');
const APIFactory = require('./apiCalls');
const dataParser = require('./dataParsing')

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const port = process.env.PORT || 8080;

const router = express.Router();

router.use(function(req, res, next) {
    // do logging
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next(); // make sure we go to the next routes and don't stop here
});


router.route('/cocktailtypes')
    .get((request, response) => {
        APIFactory.getCocktailTypes()
            .then(res => {
                const types = dataParser.parseCocktailTypes(res.text)
                response.json({cocktailTypes: types})
            })
            .catch(error => response.json({error: error}))
    })

router.route('/cocktailtypes/:typename')
    .get((request, response) => {
        APIFactory.getCocktailsByType(request.params.typename)
            .then(res => {
                const cocktails = dataParser.parseCocktailsByCategory(res.body.drinks)
                response.json({cocktails})
            })
            .catch(error => response.json({error: error}))
    })

router.route('/cocktail/:id')
    .get((request, response) => {
        APIFactory.getCocktailById(request.params.id)
            .then(res => {
                const cocktail = dataParser.parseCocktailDetails(res.body.drinks)

                response.json({cocktail})
            })
            .catch(error => response.json({error}))
    })

router.route('/search/:searched')
    .get((request, response) => {
        APIFactory.getCocktailsByName(request.params.searched)
            .then(res => {
                const cocktails = dataParser.parseCocktailsByCategory(res.body.drinks)
                response.json({cocktails})
            })
            .catch(error => response.json({error}))
    })

app.use('/api', router);

app.listen(port);
console.log('Api listening on port ' + port);


