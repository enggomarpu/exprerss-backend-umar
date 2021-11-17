const express = require('express')
const router = express.Router()
const { getAllBootcamps, getBootcampById, createBootcamp } = require('../controllers/bootcamps')


router.route('/').get(getAllBootcamps)
router.route('/').post(createBootcamp)
router.route('/:id').get(getBootcampById)

module.exports = router