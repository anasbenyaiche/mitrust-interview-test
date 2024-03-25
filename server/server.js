const express = require('express')
const axios = require('axios')

const app = express()
const PORT = 8000

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE')
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization')
  next()
})

app.get('/api/claims', async (req, res) => {
  try {
    const response = await axios.get(
      'https://app.m-itrust.com/v2/public/claims'
    )
    res.json(response.data)
  } catch (error) {
    res.status(error.response.status).json({ error: error.response.statusText })
  }
})

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`)
})
