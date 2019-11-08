const router = require('express').Router();
const db = require('../dbconfig');
const Projects = require('./projects-model')

router.get('/', ( req, res ) => {
    return db.select('*').from('projects')
})

router.get('/:id', ( req, res ) => {
    
})

module.exports = router;