const BootCampSchema = require("../models/Bootcamp")
const ErrorResponse = require("../utils/ErrorResponse")

const createBootcamp = async (req, res, next) => {
  try {
    const bootcamp = await BootCampSchema.create(req.body)
    res.status(200).json({
      success: true,
      data: bootcamp
    })
  } catch (error) {
    next(error)
  }

}
const getAllBootcamps = async (req, res, next) => {
  try {
    const allBootcamps = await BootCampSchema.find()
    res.status(200).json({ success: true, data: allBootcamps })
  } catch (error) {
    next(error)
  }

}
const getBootcampById = async (req, res, next) => {
  try {
    const bootcamp = await BootCampSchema.findById(req.params.id)
    if (!bootcamp) {
      return next(
        new ErrorResponse(`Bootcamp not found with id of ${req.params.id}`, 404)
      );
    }
    res.status(200).json({ success: true, data: bootcamp })
  } catch (error) {
    //res.status(400).json({success: false, data: null })
    next(error)
  }
}

const deleteBootcamp = async (req, res) => {
  try {
    const bootcamp = await BootCampSchema.findByIdAndDelete(req.params.id)
    if (!bootcamp) {
      return next(new ErrorResponse(`Bootcamp not found with an id of ${req.params.id}`, 404))
    }
    res.status(200).json({ success: true, data: bootcamp })
  } catch (error) {
    next(error)
  }
}
const updateBootcamp = async (req, res) => {
  try {
    const bootcamp = await BootCampSchema.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true
    })
    if (!bootcamp) {
      return next(new ErrorResponse(`Bootcamp not found with an id of ${req.params.id}`, 404))
    }
    res.status(200).json({ success: true, data: bootcamp })
  } catch (error) {
    next(error)
  }

}


module.exports = { getAllBootcamps, getBootcampById, createBootcamp, updateBootcamp, deleteBootcamp }