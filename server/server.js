

const express = require('express')
const app = express()
const PORT = 3000
app.get('/',(req,res)=>{
    res.send('Welcome to express js')
})
app.get('/:name',(req,res)=>{
    res.send(`Welcome to express js ${req.params.name}`)
})
console.log('req');
app.listen(PORT,()=>{
    console.log(`Server is running on ${PORT}`);
})