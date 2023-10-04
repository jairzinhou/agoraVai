require('dotenv').config()
const express=require('express')
const pool = require('./pool')

const app=express()

app.get('/',async (req,res)=>{
    const {rows}=await pool.query('select * from outro')
    return res.json(rows)
})

app.listen(3000)