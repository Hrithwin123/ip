import express from "express"

const app = express()

app.get("/", (req, res) => {
    console.log(`Users Ip is : ${req.ip}`)
})

app.listen(3000, () => console.log("app listening on port 3000"))