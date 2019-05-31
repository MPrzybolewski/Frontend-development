import GUITAR_DB from './services/guitarsService'
import Guitar from './domain/guitar';

const express = require('express');
const bodyParser = require('body-parser')
var cors = require('cors')

const app = express();
const port = 4000;

const guitarDB = GUITAR_DB();

app.use(bodyParser.json());
app.use(cors())

app.get('/api/guitarType/all', (req,res) => {
    res.send(guitarDB.getGuitarTypes());
});

app.get('/api/guitars/all', (req,res) => {
    res.send(guitarDB.getAll());
});

app.post('/api/guitars', (req,res) => {
    const id = req.body.guitar.id;
    const color = req.body.guitar.color;
    const brand = req.body.guitar.brand;
    const type = req.body.guitar.type;
    const withStrings = req.body.guitar.withStrings;

    const newGuitar = new Guitar(id,color,brand,type,withStrings);
    res.send(guitarDB.add(newGuitar));
});

app.delete('/api/guitars', (req,res) => {
    const id = req.body.id;
    res.send(guitarDB.remove(id));
});


app.listen(port, () => console.log(`Example app listening on port ${port}`))