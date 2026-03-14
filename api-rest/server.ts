import express from "express"

const PORT = 3333

const app = express()

app.get("/", (req, res) => {
  res.send("Hello Express")
})

app.listen(PORT, () => console.log(`\n Server is running at localhost:${PORT}\n`))