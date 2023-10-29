const express = require("express")
const {newsLetter}  = require("../controller/news_letter.controller")

const router = express.Router()

router.route("/").post(newsLetter)

module.exports = router