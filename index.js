
import express from "express";
import { router } from "./routes/route.js";
import 'dotenv/config'
import { dbConnection } from "./config/db.js";

const app = express()

dbConnection()
app.use(express.json());
app.use(router)


//listening for incoming messages
app.listen(4000, () => {
    console.log ('App listening on port 4000')
})
