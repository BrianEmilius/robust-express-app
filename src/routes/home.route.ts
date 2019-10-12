import e from "express"

module.exports = function(router: e.Router) {
	router.get("/", function(req, res, next) {
		res.render("page", { title: "Hello, World!" })
	})
}
