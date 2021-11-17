const express = require('express')
const dotenv = require('dotenv')
const bootcamps = require('./routes/bootcamps')
const logger = require('./middleware/logger')
const connectDB = require('./config/db')
const errorHandler = require('./middleware/error')

dotenv.config({path: './config/config.env'})
connectDB()

const app = express()
app.use(express.json())
app.use(logger)
app.use('/api/v1/bootcamps', bootcamps)
app.use(errorHandler)


const PORT = process.env.PORT || 5000

const server = app.listen(PORT, () => {
  console.log(`You are running server in ${process.env.NODE_ENV} mode on port ${PORT}`)
})

// Handle unhandled promise rejections
process.on('unhandledRejection', (err, promise) => {
  console.log(`Error: ${err.message}`.red);
  // Close server & exit process
  // server.close(() => process.exit(1));
});