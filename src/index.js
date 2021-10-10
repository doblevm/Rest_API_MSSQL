import app from "./app"

app.listen(app.get("PORT"))

console.log("Server running: ", app.get("PORT"))  