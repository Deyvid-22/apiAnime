import express, { query } from "express";
import cors from "cors"
const app = express()
app.use(express.json())
app.use(cors())


const animes = ["dragon ball","one piece", "naruto", "hunter X hunter"]

app.get("/anime", (req,res)=>{
    return res.json(animes)
})


app.get("/anime/:id",(req,res)=>{
     const {id} = req.params

     return res.json(animes[id])
     console.log(nome)
})

app.post("/anime",(req,res)=>{
     const {name} = req.body
     animes.push(name)

   return res.json(animes)
})


app.put("/anime/:id",(req,res)=>{
   const {id} = req.params
   const {name} = req.body

   animes[id] = name

   return res.json(animes)

})

app.delete("/anime/:id",(req,res)=>{
     const {id} = req.params
     animes.splice(id, 1)

     return res.json(animes)

})




export default app