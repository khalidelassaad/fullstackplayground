const express = require('express')
const app = express()
const port = 8000

const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient()

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/user', async (req, res) => {
  const posts = await prisma.user.findMany()
  res.json(posts)
})

app.get('/user/create/', async (req, res) => {
  const name = req.query.name
  const user = await prisma.user.create({
    data: {
      name: name
    },
  })
  res.json(user)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})