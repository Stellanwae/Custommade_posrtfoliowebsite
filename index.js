const express = require('express')
const path = require("path")
const app = express()


app.use(express.static('public'))

app.get('/', (req, res)=> {
    res.sendFile(path.resolve(__dirname, 'index.html'))
})
app.get('/BlogApp', (req, res)=> {
    res.sendFile(path.resolve(__dirname, 'blog.html'))
})
app.get('/FacebookClone', (req, res)=> {
    res.sendFile(path.resolve(__dirname, 'facebook.html'))
})
app.get('/Reactmeme', (req, res)=> {
    res.sendFile(path.resolve(__dirname, 'reactmeme.html'))
})
app.get('/portfolio', (req, res)=> {
    res.sendFile(path.resolve(__dirname, 'portfolio.html'))
})
app.get('/comingsoon', (req, res)=> {
    res.sendFile(path.resolve(__dirname, 'comingsoon.html'))
})





app.listen(3000, (req, res)=>{
    console.log("App running on port 3000")

})

