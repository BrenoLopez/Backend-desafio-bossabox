const ToolModel = require('../models/Tool');

class Tool {
   async store(req,res){
      const response = await ToolModel.create(req.body);
       res.status(201).json(response);
    }    

   async show(req,res){
    const {tag} = req.query;
    let response;
    if(tag){
        response = await ToolModel.find({tags: tag}).select('-__v');
        res.json(response);
    }
    else{
        response = await ToolModel.find().select('-__v');
        res.json(response);
    }
    }

    async destroy(req,res){
        const {id} = req.params;
        await ToolModel.deleteOne({_id: id});
        res.sendStatus(204);
    }

    
}

module.exports = new Tool(); 