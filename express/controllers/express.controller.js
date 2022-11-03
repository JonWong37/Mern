// IMPORT MODELS
const { faker } = require("@faker-js/faker")
// DEFINE ALL MY CONTROLLER FUNCTIONS

// CREATE

// READ

// READ ALL

// READ ONE

// UPDATE

// DELETE

// DUMMY METHODS
module.exports.hello = (req, res) =>{
    res.json({
        'name' : "Smith"
    })
}

module.exports.recipeMethod = (req, res) =>{
    console.log(req.params)
    res.json(req.params.recipe_id)
}

module.exports.fakerMethod = (req, res) => {

}

module.exports.users = (req, res) => {
    res.json({
        username: faker.name.fullName(),
        title: faker.name.jobTitle()
    })
}

module.exports.company = (req, res) => {
    res.json({
        company: faker.company.name()
    })
}

module.exports.usercompany = (req, res) => {
    res.json({
        username: faker.name.fullName(),
        company: faker.company.name()
    })
}