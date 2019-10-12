import express from "express"
import server from "./server"
import viewEngine from "./config/view-engine"
import { readdirSync } from "fs"
import { join } from "path"
const app = express(),
			router = express.Router()

viewEngine(app)

readdirSync(join(__dirname, "routes")).forEach(function(file) {
	require(join(__dirname, "routes", file))(router)
})

app.use(router)

server(app)
