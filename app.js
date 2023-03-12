const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const bodyParser = require('body-parser')

const medRouter = require('./routes/medRoutes')
const prescRouter=require('./routes/precRoutes')

const app = express()
const port = 3000

app.use(
    express.urlencoded({ extended: true })
);

app.use(express.json());
app.use(cors())
app.use(bodyParser.json())

app.use('/med', medRouter);
app.use('/presc',prescRouter);
app.use("*", (req, res) => res.status(404).json({ error: "not found" }));

mongoose.connect("mongodb://0.0.0.0:27017/medicalDB", { useNewUrlParser: true, useUnifiedTopology: true }) //on upgrading node version to 18.x.x use 0.0.0.0 instead of localhost
    .catch(err => { console.log(err) })
    .then(console.log("DB connected"));
app.listen(port, () => console.log(`app listening on port ${port}!`))