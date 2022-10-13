const connection = require("../database/DBinit")
const { generateUserId } = require("../pkg/RandomGenerator")

exports.findPerson = function (req, res) {
  connection.connectDB.query("SELECT * FROM profile", (err, result) => {
    if (err) {
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

exports.absenMasuk = function (req, res) {
  let slug = req.params.slug
  console.log("DATAAA ->" + slug)
  connection.connectDB.query(`SELECT * FROM profile WHERE regId = '#${slug}'`, (err, result) => {
    if (err) {
      console.log(`Error When -> ${err.message()}`)
    } else {
      let current = new Date();
      let masuk = current.toLocaleTimeString()
      connection.connectDB.query(`INSERT INTO piala_acl(nama,umur,masuk,keluar) VALUES ('${result[0].nama}',${result[0].umur},'${masuk}', '19:50:38 AM')`, (err, results) => {
        if (err) {
          console.log("Error When Input" + err.message)
        }

      }
      )
      
      res.status(200).send({
        status: 200,
        data: result,
        message: "Berhasil Terverifikasi silahkan masuk",
      })
      

    }

  })
}



exports.createPerson = function (req, res) {
  let namaHandler = req.body.nama
  let umurHandler = req.body.umur
  let beratBadan = req.body.bb
  let refId = "#" + generateUserId(7)
  connection.connectDB.query(`INSERT INTO profile(nama,umur,berat_badan,regId) VALUES ('${namaHandler}', '${umurHandler}', '${beratBadan}', '${refId}')`, (err, results) => {
    if (err) {
      console.log("Error When Input" + err.message)
    } else {
      res.status(201).send({
        status: 201,
        message: "Profile Created!"
      })
    }
  })
}

exports.detailPerson = function (req, res) {
  let slug = req.params.slug

  connection.connectDB.query(`SELECT * FROM profile WHERE id = ${slug}`, (err, results) => {
    if (err) {
      console.log(`Error When -> ${err.message()}`)
    } else {
      res.status(200).send({
        status: 200,
        data: results,
        message: `Successfully Get Profile Detail ${slug}`
      })
    }
  })
}



exports.deletePerson = function (req, res) {
  let slug = req.params.slug

  connection.connectDB.query(`DELETE FROM person WHERE id = ${slug}`, (err, results) => {
    if (err) {
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