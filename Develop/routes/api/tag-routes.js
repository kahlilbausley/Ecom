const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', async (req, res) => {
  // find all tags
  // be sure to include its associated Products 
  try{
    const tags= await Tag.findAll()
    res.json(tags)

  }catch(err){
    res.json(err)
    console.log(err)

  }
});

router.get('/:id', async (req, res) => {
  // find one tag by its `id` value
  // be sure to include its associated Products
  try{
    const tags= await Tag.findOne({
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

router.post('/', async (req, res) => {
  // create a new tag
  try{
    const tags= await Tag.create(req.body)
    res.json(tags)

  }catch(err){
    res.json(err)
    console.log(err)
    
  }
});

router.put('/:id', async (req, res) => {
  // update a tag by its `id` value
  try{
    const tags= await Tag.update(req.body,{
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

router.delete('/:id', async (req, res) => {
  // delete a tag by its `id` value
  try{
    const tags= await Tag.destroy({
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