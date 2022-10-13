// Call Express
const express = require("express")
const app = express()
const cors = require("cors")
const bodyParser = require("body-parser")
const PersonController = require("./entities/PersonController")
//  ---

const port = 9000 //Init Port 9000 


app.use(cors())
app.use(bodyParser.urlencoded({
  extended: false
}))


app.get("/", PersonController.findPerson)
app.get("/person/:slug", PersonController.detailPerson)
app.post("/create-person", PersonController.createPerson)
app.delete("/person/:slug", PersonController.deletePerson)
app.get("/masuk/:slug", PersonController.absenMasuk)


// Listen for Running on localhost
app.listen(port, () => console.log(`Server Running on ${port}`))