const express = require('express')
// const products = require('../products.json')
const getProducts = require('./getProducts')
const getProduct = require('./getProduct')

const app = express()

const port = 3500

app.listen(port, () => {
    console.log(`Server listening on port: ${port}`)
})

app.get('/api/products', getProducts)

app.get('/api/products/:id', getProduct)
