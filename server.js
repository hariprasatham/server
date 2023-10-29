const express = require("express")
require("dotenv").config()
const cors = require("cors")
const connectdb = require("./dbConnect")
const router = require("./routes/news_letter")

connectdb()
const app = express()
const PORT = process.env.PORT || 8080;

app.use(express.json())
app.use(cors())

app.use("/news-letter", router)

app.listen(PORT, ()=>console.log(`Server is listening port ${PORT}`))