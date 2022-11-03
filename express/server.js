// 1. IMPORT OUR DEPENDENCIES
const express = require("express")
const cors = require("cors")
// const { faker } = require("@faker-js/faker")

// 2. INSTANTIATE OUR EXPRESS SERVER
const app = express()
const PORT = 8000

// 3. SET UP MIDDLWARE
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cors())

// 4. Connecting the express server to the routes
// app.get("/api", (request, response) => {
//     response.json({
//         'name' : "Smith"
//     })
// })

// app.get("/api/users/new", (req, res) =>{
//     res.json({
//         username: faker.name.fullName(),
//         title: faker.name.jobTitle()
//     });
// })

// app.get("/api/company/new", (req, res) => {
//     res.json({
//         company: faker.company.name()
//     })
// })

// app.get("/api/user/company", (req, res)=>{
//     res.json({
//         username: faker.name.fullName(),
//         company: faker.company.name()
//     })
// })

// app.get("/api/recipes/:recipe_id", (req, res) => {
//     console.log(req.params.recipe_id)
//     res.json(req.params.recipe_id)
// })

const expressRoute = require("./routes/express.routes")
expressRoute(app)


// 5. RUN YOUR EXPRESS SERVER
app.listen(PORT, () => console.log(`EXPRESS RUNNING ON PORT ${PORT}`))