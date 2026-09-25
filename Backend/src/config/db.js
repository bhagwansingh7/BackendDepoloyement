const mysql=require('mysql2/promise')
const dotenv=require('dotenv').config()
const db_host=process.env.DB_HOST
const db_port=process.env.DB_PORT
const db_password=process.env.DB_PASSWORD
const db_name=process.env.DB_NAME
const db_user=process.env.DB_USER
const pool=mysql.createPool({
        host:db_host,
        database:db_name,
        user:db_user,
        password:db_password,
        port:db_port
})

const check_connection=async()=>{
    try {
        const conn=await pool.getConnection();
        console.log('db connection successful')
        const [tables]=await pool.execute(`show tables`)
        console.log(tables)
        conn.release()
    } catch (error) {
        console.log('databse connection error',error.message)
    }
}

check_connection()

module.exports=pool