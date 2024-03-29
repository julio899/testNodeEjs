import express from "express";
const routes = express();
import path from "path";

const urlBaseViews = path.join(__dirname, "").replace("build", "src/views/");
console.log("* url views: " + urlBaseViews);

// Routes
routes.get("/", (req: any, res: any) => {
	res.render(urlBaseViews + "home.html", { title: "any case" });
});

export default routes;
