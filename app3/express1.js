const express = require ('express')
const mysql2 = require('mysql2')
const bodyparser = require('body-parser')

const app = express()

const Connection = mysql2.createConnection({
    host:'localhost',
    port:'3306',
    user:'root',
    password:'admin123',
    database:'ecom'
})

app.use(bodyparser.json())

app.get('/get',(request,response) => {
    const statement = `select * from product`;
    Connection.query(statement,(error,data)=>{
        Connection.end();
        if(error){
            console.log(error);
        }else{
            response.send(data);
        }
    })
})

app.post('/post',(request,response)=>{
    const {title,description,price} = request.body
    const statement = `insert into product (title,description,price) values ('${title}','${description}','${price}')`
    Connection.query(statement ,(error,data)=> {
        Connection.end();
        if(error){
            console.log('error')

        }else{
            console.log('record inserted.....')
            console.log(`${JSON.stringify(data)}`)
        }
    })
    response.send()
})

app.delete('/delete/:pid',(request,response)=>{
    const { pid } = request.params
    const statement = `delete from product where id = ${pid}`
    Connection.query(statement,(error,data)=>{
        Connection.end()
        if(error){
            console.log('error')

        }else{
            console.log(`record deleted with id = ${pid} `)
            response.end()
        }
    })
})

app.put('/put/:id',(request,response)=> {
    const{ id } = request.params;
    const{title ,description,price}=request.body
    const statement = `update product set title='${title}',description='${description}',price='${price}' where id = '${id}'`
    Connection.query(statement,(error,data) => {
        Connection.end()
        if(error){
            console.log('error')

        }else{
            console.log(`record updated with id = ${id} `)
            response.send(data)
        }
    })
})
app.listen(3000,'0.0.0.0' ,() => {
    console.log('server started')
})