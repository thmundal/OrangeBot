import * as express from "express";
import * as path from "path";

const port = 80; //process.env.SERVER_PORT;
const app = express();

export function startWebServer() {
    app.set("views", path.join(__dirname, "views"));
    app.set("view engine", "ejs");
    
    app.get("/", (req, res) => {
        res.render("index");
    });
    
    app.listen(port, () => {
        console.log("Express server started on port ", port);
    });
}