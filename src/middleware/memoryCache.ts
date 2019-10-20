import e from "express"

import mcache from "memory-cache"

const GET = "GET"
const CACHE_PREFIX = "__express__"

/**
 * An in-memory request cache.
 * @param duration in millisecond
 * @returns an express middleware
 */
export default function cache(duration: number): e.Handler {
	return function(req: e.Request, res: e.Response, next: e.NextFunction): void {
		if (req.method.toUpperCase() !== GET) {
			return next()
		}

		const key = CACHE_PREFIX + (req.originalUrl || req.url)

		const cached = mcache.get(key)
		if (cached) {
			res.send(cached)
			return
		}

		const sendResponse = res.send.bind(res)

		// Overwritting the send method to cache the body before sending it
		res.send = (body: any): e.Response => {
			mcache.put(key, body, duration)
			return sendResponse(body)
		}

		next()
	}
}
