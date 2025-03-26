require('dotenv').config()

const express = require('express')
const app = express()
const port = 4000

const data = {
    name: 'Amit',
    age: 30,
    city: 'Delhi'
}

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/about', (req, res) => {
    res.send('About page')
    })

app.get('/login',(req,res)=>{
    res.send('<h1>please login</h1>')
})

app.get('/brg',(req,res)=>{
    res.send('hello ji kaisa ho')
})

app.get('/data',(req,res)=>{
    res.json(data)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

app.listen(process.env.PORT ,()=>{
    console.log(`server is running on port ${process.env.PORT}`)
})