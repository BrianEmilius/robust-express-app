import e from "express"

module.exports = function(router: e.Router): void {
	router.get("/", function(req, res): void {
		res.render("page", { title: "Hello, World!" })
	})

	router.get("/error", function(req, res, next): void {
		next(new Error("This is a test error"))
	})
}
