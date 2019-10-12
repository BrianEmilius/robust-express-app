import Winston from "winston"
import expressWinston from "express-winston"
import DailyRotateFile from "winston-daily-rotate-file"

export const activityLogging = expressWinston.logger({
	transports: [
		new Winston.transports.Console()
	],
	meta: false,
	expressFormat: true
})

export const errorLogging = expressWinston.errorLogger({
	transports: [
		new DailyRotateFile({
			dirname: "logs/errors",
			filename: "%DATE%.log",
			datePattern: "YYYY-MM-DD-HH",
			maxSize: "2m",
			maxFiles: "1d",
			zippedArchive: true
		})
	],
	msg: req => req.app.locals.requestId
})

export const debug = Winston.createLogger({
	transports: [
		new Winston.transports.Console()
	]
})
