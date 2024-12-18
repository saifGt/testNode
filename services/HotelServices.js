const Hotel = require('../model/hotel')


async function getAllHotel(req,res,next) {

    try{
        const data = await Hotels.find()
        res.status(200).json(data)

    }catch(error){
        res.status(503).json(error)
    }
    
}

async function addHotel (req,res,next){
    const{name,nbrRooms}=req.body
     await new Hotel({
        name:name,
        fabricationDate:new Date(),
        nbrRooms:nbrRooms
    }).save().then((data,error)=>{
        if(error){
            res.status(500).json({ error: 'Error saving hotel', details: error });
        }
        res.json(data);
        
    });
}

async function DeleteHotel(req,res,next){
    const id = req.params.id
    const data = await Hotel.findByIdAndDelete(id)
    if(!data){
        res.status(404).json('hotel Not found')
    }else{
        res.status(200).json('hotel est supprimer ')
    }
}

async function UpdateHotel(req,res,next){
   await Hotel.findByIdAndUpdate(req.params.id,req.body)
    .then((data,err)=>{
        if(err){res.status(503).json(err)}
        else{
            res.status(201).json(data)
        }
    })
}

async function getHotelById(req,res,next){
    const id = req.params.id
    try{ const data = await Hotel.findById(id)
        res.json(data)
    }catch(error){
        console.log(error,id)
    }
  
}

async function searchHotel(req,res,next){
    const min = 10
    const max = 100

    const data = await Hotel.find()
    
     if(data.nbrRooms > min && data.nbrRooms < max){
        console.log(data)

        res.json(data)
     }else{
        res.json('ne pas hotel')
     }
}

module.exports={addHotel,getAllHotel,getHotelById,UpdateHotel,DeleteHotel,searchHotel}