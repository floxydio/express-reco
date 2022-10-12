const connection = require("../database/DBinit")

exports.findPerson = function (req,res) {
   connection.connectDB.query("SELECT * FROM person", (err, result) => {
    if(err) {
      console.log(`Error When -> ${err.message()}`)
    } else {
      res.status(200).send({
        status: 200,
        data: result,
        message: "Successfully Get Person"
      })
    }
   })
}


exports.createPerson = function(req,res) {
  let namaHandler = req.body.nama
  let umurHandler = req.body.umur
  let beratBadan = req.body.bb

  connection.connectDB.query(`INSERT INTO person(Nama,Umur,BeratBadan) VALUES ('${namaHandler}', '${umurHandler}', ${beratBadan})`, (err,results) => {
    if (err) {
      console.log("Error When Input")
    } else {
      res.status(201).send({
        status: 201,
        message: "Person Created!"
      })
    }
  })
}

exports.detailPerson = function(req,res) {
  let slug = req.params.slug

  connection.connectDB.query(`SELECT * FROM person WHERE id = ${slug}`, (err,results) => {
    if(err) {
      console.log(`Error When -> ${err.message()}`)
    } else {
      res.status(200).send({
        status: 200,
        data: results,
        message: `Successfully Get Person Detail ${slug}`
      })
    }
  })
}



exports.deletePerson = function(req,res) {
  let slug = req.params.slug

  connection.connectDB.query(`DELETE FROM person WHERE id = ${slug}`, (err,results) => {
    if(err) {
      console.log(`Error When -> ${err.message()}`)
    } else {
      res.status(200).send({
        status: 200,
        data: results,
        message: `Successfully Delete Person Detail ${slug}`
      })
    }
  })
}