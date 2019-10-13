import e from "express"
import session from "express-session"
import redis from "redis"

const RedisStore = require("connect-redis")(session)
const client = redis.createClient()

export default function(app: e.Application): void {
	app.use(
		session({
			store: new RedisStore({ client }),
			secret: "not yet",
			saveUninitialized: true,
			resave: false
		})
	)
}
