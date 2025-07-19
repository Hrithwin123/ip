import express from "express"

const app = express()

app.set("trust proxy", true)
app.use(express.json())

app.get("/", (req, res) => {
    console.log(`Users ip is : ${req.ip}`)

    return res.json({success : true, message : "you shouldnt really click on random links"})
})

app.listen(3000, () => console.log("app listening on port 3000"))