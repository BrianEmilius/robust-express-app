import e from "express"

export default function(req: e.Request, res: e.Response,
	next: e.NextFunction) {
		if (!req.session) {
			return next(new Error("ENOSESSION"))
		}
		next()
	}
