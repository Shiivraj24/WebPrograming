const express = require('express')

const mysql = require('mysql2')

const app = express()

app.get('/product', (req,res) => {
    const conn = mysql.createConnection({
        host:'0.0.0.0',
        user:'root',
        password1:'admin123',
        database:'ecom',
        port:'3306'
    })

    const statement = `select * from product`;

    conn.query(statement,(error , products ) => {
        conn.end();
        console.log(error);
        // const strProduct = JSON.stringify(products)
        // res.end(strProduct);
        res.send(products)
    })
})
app.listen(3000,'0.0.0.0',() => {
    console.log('server is running on port no 3000')
})

