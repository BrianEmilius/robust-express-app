import e from "express"
import { join } from "path"

export default function(app: e.Application) {
	app.engine("ejs", require("express-ejs-extend"))
	app.set("view engine", "ejs")
	app.set("views", join(__dirname, "..", "views"))
}
