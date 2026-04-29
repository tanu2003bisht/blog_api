const express = require('express');
const router = express.Router();
const Blog = require('./../models/blog');

//post method
router.post('/', async(req,res) =>{
    try{
    const data = req.body;//extract the data from req body
    const newBlog = new Blog(data);// create new blog to write the document
    const response = await newBlog.save();//save the data
    console.log('data saved');
    res.status(201).json(response);
    }catch(err){
        console.log(err);
        res.status(500).json({error: ' internal server error'});
    }
})

//get method
router.get('/', async(req,res) =>{
    try{
        const data = await Blog.find();
        console.log('data saved');
        res.status(201).json(data);
    }catch(err){
        console.log(err);
        res.status(500).json({error: ' internal server error'});
    }
})

//parametrized api calls
router.get('/:id', async(req,res) =>{
    try{
        const blog = await Blog.findById(req.params.id);
        console.log('data fetched')
        res.status(201).json(blog);
    }catch(err){
        console.log(err);
        res.status(500).json({message: 'no blog found'});
    }
})

//update method
router.put('/:id', async(req,res) =>{
    
    try{
        const blogID = req.params.id;
        const updatedBlogId =  req.body;
        const response = await Blog.findByIdAndUpdate(blogID,updatedBlogId,{
            new:true,
            runValidators: true,
    })
    if(!response){
        return res.status(404).json({error: 'blog not found'});
    }
        console.log('updated');
        res.status(200).json(response);
    
    }catch(err){
        console.log(err);
        res.status(500).json({error: 'internal server error'});
    }

})

//delete method
router.delete('/:id', async(req,res) =>{
    try{
        const blogID = req.params.id;
        const response = await Blog.findByIdAndDelete(blogID);
        if(!response){
            return res.status(404).json({error: 'blog not found'});
        }
        console.log('successfully deleted');
        res.status(201).json({message: 'deleted'})
    }catch(err){
        console.log(err);
        res.status(500).json({message: 'internal server error'});
    }
})

module.exports = router;