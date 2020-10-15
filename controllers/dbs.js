
const model = require('../models/admin/Cabinet')


exports.getData = async function(req,res) {
  
        
    const areas = await model.getAllArea()
    
    return res.render ('dataresult',  {
        layout: 'test',
        areas
    })
    
}