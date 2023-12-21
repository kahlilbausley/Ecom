const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', async(req, res) => {
  // find all categories
  // be sure to include its associated Products 
  try{
    const categories=Category.findAll()
    res.json(categories)

  }catch(err){
    res.json(err)
    console.log(err)

  }
});

router.get('/:id', (req, res) => {
  // find one category by its `id` value
  // be sure to include its associated Products
  try{
    const categories=Category.findOne({
      where:{
        id:req.params.id
      }
    })
    res.json(categories)

  }catch(err){
    res.json(err)
    console.log(err)
    
  }
});

router.post('/', (req, res) => {
  // create a new category
  try{
    const categories=Category.create(req.body)
    res.json(categories)

  }catch(err){
    res.json(err)
    console.log(err)
    
  }
});

router.put('/:id', (req, res) => {
  // update a category by its `id` value
  try{
    const categories=Category.update(req.body,{
      where:{
        id:req.params.id
      }
    })
    res.json(categories)

  }catch(err){
    res.json(err)
    console.log(err)
    
  }
});

router.delete('/:id', (req, res) => {
  // delete a category by its `id` value
  try{
    const categories=Category.destroy({
      where:{
        id:req.params.id
      }
    })
    res.json(categories)

  }catch(err){
    res.json(err)
    console.log(err)
    
  }
});

module.exports = router;