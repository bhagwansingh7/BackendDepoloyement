const pool=require('../config/db')

//get all users
const getUsers=async()=>{
    try {
        const [result]=await pool.execute('select * from employees')
        // console.log(result)
        return result;


    } catch (error) {
        throw error
    }
}


module.exports={getUsers}