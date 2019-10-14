import e from "express"
const uid = require("uid")

export const setRequestId = function(req: e.Request, res: e.Response, next: e.NextFunction): void {
	req.app.locals.requestId = `${uid(8)}-${uid(14)}-${uid(14)}`
	next()
}

export const ERR404 = function(req: e.Request, res: e.Response, next: e.NextFunction): void {
	res.status(404)
	res.render("404", {
		title: "404: Not Found"
	})
	next()
}

export const ERR500 = function(err: e.Errback, req: e.Request, res: e.Response): void {
	res.status(500)
	res.render("500", {
		title: "500: Internal Server Error",
		requestId: req.app.locals.requestId
	})
}
