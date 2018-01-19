const express = require('express')

const app = express()

app.get('/hello', (req,res) => {
    res.send('hello world')
})

app.listen(process.env.PORT || '3000', () => {
    console.log('app listening on port 3000')
})
