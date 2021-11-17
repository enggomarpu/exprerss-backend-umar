const ErrorResponse = require("../utils/ErrorResponse")

const errorHandler = (error, req, res, next) => {
  
  let err = {...error}
  err.message = error.message

  console.log('Error', err)
  
  if(error.name === 'CastError'){
    let message = `Bootcamp not found with an id of ${err.value}`
    err = new ErrorResponse(message, 404)
  }
  if(err.code === 11000){
    let message = `Duplicate key error in ${Object.keys(err.keyValue)} field ${err.keyValue.name}`
    err = new ErrorResponse(message, 400)
  }
  if(error.name === 'ValidationError'){
    const errors = Object.values(err.errors).map(el => el.message);
    const message = `Invalid input data. ${errors.join('. ')}`;
    err = new ErrorResponse(message, 400)
  }
  
  res.status(err.statusCode || 500) .json({success: false, error: err.message || 'Server Error' })
}
module.exports = errorHandler
