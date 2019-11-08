const router = require('express').Router();
const db = require('../dbconfig');
const Resources = require('./resources-model')

router.get('/', ( req, res ) => {
    return db.select('*').from('projects')
})

router.get('/:id', ( req, res ) => {
    
})