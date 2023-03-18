const express = require('express')
const app = express()
const port = 8000

const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient()
// use `prisma` in your application to read and write data in your DB

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})