const express = require('express');
const bodyParser = require('body-parser');
const APIFactory = require('./apiCalls')

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const port = process.env.PORT || 8080;

const router = express.Router();

router.use(function(req, res, next) {
    // do logging
    console.log(req.body);
    next(); // make sure we go to the next routes and don't stop here
});


router.route('/cocktailtypes')
    .get((req, res) => {
        APIFactory.getCocktailTypes()
            .then(res => res.json({cocktailTypes: res}))
            .catch(err => console.log(err))

    })

app.use('/api', router);

app.listen(port);
console.log('Api listening on port ' + port);


