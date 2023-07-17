const express = require('express')

const app = express()

app.get('/product', (req,res) => {
    console.log('inside get/product method')
    res.end();
})

app.listen(3000,'0.0.0.0', ()=>{
    console.log('server started on port 3000')
})