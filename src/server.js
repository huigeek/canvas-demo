'use strict'

const path = require('path')
const express = require('express')

const app = express()

const port = process.env.PORT || 3000

app.use(express.static(path.resolve(__dirname, 'public')))

app.listen(port, () => console.log(`app start at port: ${port}`))