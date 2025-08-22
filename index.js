const app = express()
app.get("/", (req, res)=>{
    res.json("hello world")
})