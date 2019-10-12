import e from "express"

module.exports = function(router: e.Router) {
	router.get("/", function(req, res, next) {
		res.render("page", { title: "Hello, World!" })
	})
	router.get("/error", function(req, res, next) {
		next(new Error("This is a test error"))
	})
}
