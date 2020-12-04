import express from 'express';
import data from './data';

const app = express();
app.use('/api/products', (req, res) =>{
    res.send(data.products);
});

//pour lancer le serveur, express.js va se lancer
app.listen(5000, () => {console.log('Server started at http://localhost:5000')}) 