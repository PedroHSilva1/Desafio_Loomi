import express from "express"
import cors from "cors"
import dotenv from "dotenv"
import routes from "./routes"

dotenv.config()

//
const app = express();
app.use(cors())
app.use(express.json())

routes(app)



app.listen(8081, () =>{
    console.log("Servidor rodando em http://localhost:8081")
})