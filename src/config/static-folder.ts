import e from "express"
import { join } from "path"

export default function(app: e.Application): void {
	app.use(e.static(join(__dirname, "..", "public")))
}
