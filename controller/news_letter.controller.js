const NewsLetter = require("../models/newsletter.model")

const newsLetter = async (req, res) => {
    const { email } = req.body
    
    try {
        const newsLetter = await NewsLetter.create({
            email
        })
        res.send({ success: true, status: 200,  message: "Subscribed successfully" })
    } catch (error) {
        res.send({success: false, status:400,  message: "Email is required" })
    }
}



module.exports = { newsLetter }