// IMPORT THE CONTROLLER
const ExpressController = require("../controllers/express.controller")

// DEFINE THE ROUTE
module.exports = app => {
    app.get("/api", ExpressController.hello)
    app.get("/api/recipes/recipe_id", ExpressController.recipeMethod)
    app.get("/api/users/new", ExpressController.users)
    app.get("/api/company/new", ExpressController.company)
    app.get("/api/user/company", ExpressController.usercompany)
}