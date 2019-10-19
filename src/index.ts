import express from "express"
import server from "./server"
import viewEngine from "./config/view-engine"
import { activityLogging, errorLogging, debug } from "./middleware/logging"
import { setRequestId, ERR404, ERR500 } from "./middleware/errorPages"
import staticFolder from "./config/static-folder"
import session from "./config/session"
import sessionCheck from "./middleware/sessionCheck"
import memoryCache from "./middleware/memoryCache"
import { readdirSync } from "fs"
import { join } from "path"
const app = express(),
	router = express.Router()

session(app)
viewEngine(app)
staticFolder(app)

router.use(sessionCheck)

router.use(activityLogging)
router.use(setRequestId)

router.use(memoryCache(5000))

readdirSync(join(__dirname, "routes")).forEach(function(file) {
	require(join(__dirname, "routes", file))(router)
})

router.use(ERR404)
router.use(errorLogging)
router.use(ERR500)

app.use(router)

server(app, debug)
