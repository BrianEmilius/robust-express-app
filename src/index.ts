import express from "express"
import server from "./server"
import { readdirSync } from "fs"
import { join } from "path"
const app = express(),
			router = express.Router()

readdirSync(join(__dirname, "routes")).forEach(function(file) {
	require(join(__dirname, "routes", file))(router)
})

app.use(router)

server(app)
