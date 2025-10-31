const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
const router = express.Router();

//implementam politica Cors
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());
app.use("/api", router);

// Datele inițiale (se pot extinde sau modifica)
const array = [
  { id: 1, name: "Ionut", age: 25 },
  { id: 2, name: "Maria", age: 21 },
  { id: 3, name: "Eugen", age: 26 },
  { id: 4, name: "Mara", age: 28 },
];

// Endpoint GET pentru a prelua lista de elemente
router.get("/getList", (req, res) => {
  res.json(array);
});

// Endpoint POST pentru a adăuga un nou element în listă
router.post("/postList", (req, res) => {
  let el = req.body;
  array.push(el);
  res.json(el);
});

// TO DO - creati un endpoint PUT pentru a edita un element din lista dupa ID

app.listen(8000, () => console.log("Server is running on port 8000"));
