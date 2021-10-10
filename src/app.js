import express from "express"
import config from "./config"

const app = express()

//settings
app.set("PORT", config.PORT || 3000)

export default app