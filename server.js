const express = require('express')
const cors = require('cors')
require('dotenv').config() 

const app = express()

// CORS configuration
const corsOptions = {
  origin: process.env.FRONTEND_URL || 'http://localhost:3000',
  credentials: true
};

//middleware
app.use(cors(corsOptions))
app.use(express.json())

//routes
app.get('/', (req, res) => {
  res.json({ message: 'Cloud Optimizer API is running!' })
})

const analyzeRoutes = require('./routes/analyze')
app.use('/api/analyze', analyzeRoutes)

const PORT = process.env.PORT || 5000 
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
