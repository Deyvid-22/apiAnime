import express, { query } from "express";
const app = express()
app.use(express.json())

const animes = ["dragon ball","one piece", "naruto", "hunter X hunter"]

app.use((req,res,next)=>{
     console.log("url chamada ", req.url)
    return next()
})

function checkAnime(req, res, next){
     if(!req.body.name){
        return res.status(400).json({error:"nome do anime obrigatorio"})
     }
     return next()
}

function checkIdAnime(req,res,next){
    
     if(!animes[req.params.id]){
          return res.status(400).json({error:"nome do anime não existe"})
       }
       return next()
}

app.get("/anime", (req,res)=>{
    return res.json(animes)
})


app.get("/anime/:id",checkAnime, checkIdAnime,(req,res)=>{
     const {id} = req.params

     return res.json(animes[id])
})

app.post("/anime", checkAnime,(req,res)=>{
     const {name} = req.body
     animes.push(name)

   return res.json(animes)
})


app.put("/anime/:id",checkAnime ,checkIdAnime,(req,res)=>{
   const {id} = req.params
   const {name} = req.body
   animes[id] = name

   return res.json(animes)
})

app.delete("/anime/:id",checkIdAnime,checkIdAnime,(req,res)=>{
     const {id} = req.params
     animes.splice(id, 1)

     return res.json(animes)
})

export default app