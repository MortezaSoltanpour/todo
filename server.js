const path = require("path");

const express = require("express");
const bodyParser = require("body-parser");

const { setStatics } = require("./utils/statics");
const adminRoutes = require("./routes/admin");
const indexRoutes = require("./routes/index");
const page404Controller = require("./controllers/404");

const app = express();

//Middlewares
app.use(bodyParser.urlencoded({ extended: false }));
//End of middleware

//EJS
app.set("view engine", "ejs");
app.set("views", "views");
//End of EJS

//Statics
setStatics(app);

//Routes
// app.get("/", (req, res) => {
//   res.render("index", { pageTitle: "کارهای روزمره" });
// });

app.use(indexRoutes);

app.use("/admin", adminRoutes);

//End of routes

app.use(page404Controller.get404);

app.listen(3000, () => console.log(`Server is running.`));
