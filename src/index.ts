import express from "express";
import routes from "./routes";
import pathF from "path";

const app = express();

// Settings and Config
app.set("port", 3000);
app.set("views", pathF.join(__dirname, "").replace("build", "src/views/") );
app.engine('html',require('ejs').renderFile );
app.set("view engine", 'ejs');
//console.log(path.join(__dirname, "public").replace("build/", "src/"));
// Public
app.use(
	express.static(pathF.join(__dirname, "public").replace("build/", "src/"))
);

// Routes
app.use(routes);

app.listen(app.get("port"), function() {
	console.log("Example app listening on port " + app.get("port"));
});
