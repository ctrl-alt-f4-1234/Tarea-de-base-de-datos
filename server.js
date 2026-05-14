const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
var corsOption = {
  origin: "http://localhost:8081"
};

app.use(cors(corsOption));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
const db = require("./App/Models");
db.Sequelize.sync();
app.get("/", (req, res)=>{
  res.json({ message: "Mi primera base de datos en la nube!"});
});

require("./App/routes/colegio.routes")(app);
const PORT = process.env.PORT || 8081;
app.listen(PORT, ()=> {
  console.log(`El servidor esta corriendo en el puerto ${PORT}.`);
})