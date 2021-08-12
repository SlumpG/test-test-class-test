const bcrypt = require('bcryptjs')
const userSchema = require('../Models/userSchema')

async function createNewUser(req, res) {
    try {
        await userSchema.findOne({Email:req.body.user.Email},(err,user)=>{
        if(user){
            return res.status(403).json({Eail:"email alreadty exist"})
        }            
        bcrypt.genSalt(10,(err,salt)=>{
            bcrypt.hash(req.body.user.Eail, salt, (err,hash)=>{
                if(err) throw err;
                req.body.user.password = hash;
                userSchema.insertMany(req.body.user, (err)=>{
                    if(err){
                        return res.status(400).json({success:false,error:err})
                    }
                    res.status(201).json({success:true,error:"great success "})
                })
            })
        })
        })

        
    }catch(e){
        res.status(500).send(e)
    }
  }