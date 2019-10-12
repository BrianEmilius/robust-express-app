import e from "express"

module.exports = function(router: e.Router) {
	router.get("/", function(req, res, next) {
		res.send("Hello, World!")
	})
}
