import express from "express"
import cors from "cors"
import bodyparser from "body-parser"
import config from "../config/index"
import { reqLogger } from "../utilities/reqLogger"
import router from "../routes/index"

const app = express()


app.use(express.json({ limit: "50mb"}));
app.use(express.urlencoded({ extended: false, limit: "50mb"}));
app.use(cors())
app.use(bodyparser.json())
app.use(reqLogger);
app.use("/api", router)

app.use("/", (req, res) => {
    res.send( "Welcome to Locale")
})

app.use((req, res) => res.status(404).send({
	error: "Invalid route",
	message: "Kindly check your route and resend your request"
}));

export default app;
