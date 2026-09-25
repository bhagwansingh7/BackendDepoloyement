const {getUsers}=require('../models/user.model')

const getallusers=async(req ,res)=>{
    try {

        const users=await getUsers();
        console.log(users)
        res.status(200).json({
            message:'all users data',
            users
        })
        
    } catch (error) {
        res.status(401).json({
            message:'error in fetch the user',
            error:error.message
        })
    }
}

module.exports={getallusers}