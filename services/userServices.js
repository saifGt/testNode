
const Users = require('../model/User')

async function getAllUser(req,res,next) {

    try{
        const data = await Users.find()
        res.status(200).json(data)

    }catch(error){
        res.status(503).json(error)
    }
    
}

async function addUser (req,res,next){
    const{nom,email}=req.body
    const {age}=req.params.age
     await new Users({
        nom:nom,
        email:email,
        age:age
    }).save().then((data,error)=>{
        if(error){
            res.status(500).json({ error: 'Error saving user', details: error });
        }
        res.json(data);
        
    });
}

async function DeleteUser(req,res,next){
    const id = req.params.id
    const data = await Users.findByIdAndDelete(id)
    if(!data){
        res.status(404).json('users Not found')
    }else{
        res.status(200).json('user est supprimer ')
    }
}

async function UpdateUser(req,res,next){
   await Users.findByIdAndUpdate(req.params.id,req.body)
    .then((data,err)=>{
        if(err){res.status(503).json(err)}
        else{
            res.status(201).json(data)
        }
    })
}

async function getUserById(req,res,next){
    const id = req.params.id
    try{ const data = await Users.findById(id)
        res.json(data)
    }catch(error){
        console.log(error,id)
    }
  
}

module.exports={getAllUser,addUser,DeleteUser,UpdateUser,getUserById}