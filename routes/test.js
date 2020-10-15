const {Router} = require('express')
const router = Router()

const dbs = require('../controllers/dbs')

router.get('/', (req,res) => {
    res.render('test',{
        layout:'test'
    })
})

router.get('/test/rout', (req,res) => {
    res.render('rout',{
        layout:'test'
    })
})

router.get('/database/test', dbs.getData)

module.exports = router

