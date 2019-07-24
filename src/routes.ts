import express from 'express';
const routes = express();
import path from "path";

const urlBaseViews = path.join(__dirname, "").replace("build", "src/views/");
console.log('* url views: '+ urlBaseViews);

// Routes
routes.get('/',(req:any,res:any)=>{
	res.sendFile( urlBaseViews + 'home.html');
});

export default routes;