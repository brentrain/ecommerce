const express       = require('express');
const Item         = ('../models/itemModel')

const router        = express.Router();

//GET All Items
router.get('/', (req, res) => {
    res.json({mssg: "GET all items"});
}); 

//GET a single item
router.get('/:id', (req, res) => {
    res.json({mssg: "GET a singe item"})
});

//POST a new item
router.post('/', async (req, res) => {
    const {item, description, price} = req.body 
        try {
            const item = await Item.create({item, description, price})
            res.status(200).json(item)
        } catch(error) {
            res.status(400).json({error: error.message})
        }
})

//DELETE an item
router.delete('/:id', (req, res) => {
    res.json({mssg: "DELETE an item"})
})

//UPDATE/PATCH an item
router.patch('/:id', (req, res) => {
    res.json({mssg: "UPDATE an item"})
})




module.exports = router;