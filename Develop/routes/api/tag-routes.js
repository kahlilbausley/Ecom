const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', async(req, res) => {
  // find all tags
  // be sure to include its associated Products 
  try{
    const tags=Tag.findAll()
    res.json(tags)

  }catch(err){
    res.json(err)
    console.log(err)

  }
});

router.get('/:id', (req, res) => {
  // find one tag by its `id` value
  // be sure to include its associated Products
  try{
    const tags=Tag.findOne({
      where:{
        id:req.params.id
      }
    })
    res.json(tags)

  }catch(err){
    res.json(err)
    console.log(err)
    
  }
});

router.post('/', (req, res) => {
  // create a new tag
  try{
    const tags=Tag.create(req.body)
    res.json(tags)

  }catch(err){
    res.json(err)
    console.log(err)
    
  }
});

router.put('/:id', (req, res) => {
  // update a tag by its `id` value
  try{
    const tags=Tag.update(req.body,{
      where:{
        id:req.params.id
      }
    })
    res.json(tags)

  }catch(err){
    res.json(err)
    console.log(err)
    
  }
});

router.delete('/:id', (req, res) => {
  // delete a tag by its `id` value
  try{
    const tags=Tag.destroy({
      where:{
        id:req.params.id
      }
    })
    res.json(tags)

  }catch(err){
    res.json(err)
    console.log(err)
    
  }
});

module.exports = router;