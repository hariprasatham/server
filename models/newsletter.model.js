const mongoose = require("mongoose")

const newsLetterSchema = mongoose.Schema({
    email: {
        type: String,
        required: [true, "email is required"]
    }
})

module.exports = mongoose.model("newsletter", newsLetterSchema)