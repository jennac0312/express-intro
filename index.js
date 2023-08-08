//  first steps in terminal to create enviornment => (npm init -y , npm i express , touch index.js (index from package-json "main") )

// first steps to create server
    // 1. require express
    // 2. app instance of express
    // 3. listen() method for PORT on app

// importing express
const express = require("express")

// connect express instance to variable app
const app = express()
// server port
const PORT = 3000


// MIDDLE WARE BEFORE ROUTES ---------------------------------------------
// sets connection between our app and its view engine, our case jsx
app.set("view engine", "jsx")
app.engine("jsx", require('express-react-views').createEngine())


const plants = ['Monstera Deliciosa', 'Corpse Flower', 'Elephant-Foot Yam', "Witches' Butter",]
const foods = ['banana', 'apple', 'mango']
// CREATE ROUTES BASED ON PATH/REST --------------------------------------

// home route
// req is when user goes to /home
app.get('/', (req, res) => {
    res.send("<h1>Welcome to my Home Page User</h1>")
})

app.get('/home', ( req, res) => {
    // res.send(` <h1> HOME PAGE </h1> `)
    res.render("Home")
})

app.get('/about-me', ( req, res ) => {
    res.render("About")
})

app.get('/another-one', ( req, res ) => {
    res.render("Another")
})

// URL QUERY PARAMETERS ------------------------------------------------
app.get('/:indexOfPlantsArray', ( req, res ) => {

    res.send(plants[req.params.indexOfPlantsArray]) // req.params.name HAS to match the path...
    //conected our plants array with the route
    // plants varaible[ index = request parameter of the path number we are on]

    // path '/0' - Monstera Deliciosa (aka plants[0])
    // path '/1' - Corpse Flower (aka plants[1])
    // path '/2' - Elephant-Foot Yam (aka plants[2])
    // path '/3' - Witches' Butter (aka plants[3])

    // COMMON ERROR
})

app.get('/foods/:indexOfFoodsArray', ( req, res) => {
    // can conditionally render a response
    if(foods[req.params.indexOfFoodsArray]){
        res.send(`<h1>${foods[req.params.indexOfFoodsArray]}</h1>`)
    } else {
        res.send(`<h1>cannot find anything at index ${req.params.indexOfFoodsArray}</h1>`)
    }
})

// app.get('/plants', ( req, res ) => {
//     res.send(plants)
//  didnt work for me like it did for jordan hmm... his looked like the info an api gives back
// })



// app.get('/about', (req, res) => {
//     res.send("<h1>About</h1>")
//     // res.render("ComponentName") // we can render components!!
// })

// app.get('/contact', (req, res) => {
//     res.send("<h1>Contact</h1>")
// })

// app.get('/whatever', (req, res) => {
//     res.send("<h1>Whatever</h1>")
// })

// We can render JSX views!!!! aka components 



// creates server based on PORT value
    // req res callback tells us we are staring the req/res cycle
app.listen(PORT, (req, res) => {
    console.log(`Server listening on PORT ${PORT}`)
})



