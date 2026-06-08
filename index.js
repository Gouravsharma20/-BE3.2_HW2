const express = require("express")

const app = express()

app.use(express.json())

app.get("/",(req,res)=>{
    res.send("Express server")
})

const movies = [
  { id: 1, title: 'Inception', director: 'Christopher Nolan', year: 2010 },
  { id: 2, title: 'The Godfather', director: 'Francis Ford Coppola', year: 1972 }
];

const items = [
  { id: 1, itemName: 'Spoon', color: 'Silver', quantity: 8},
 { id: 2, itemName: 'Fork', color: 'Silver', quantity: 8 }
];



app.get("/items",(req,res)=>{
    res.json(items)
})

app.post("/addItems",(req,res)=>{
    const {itemName,color,quantity} = req.body
    const newItem = req.body
    if (!itemName || !color || !quantity) {
        res.status(400).json("item name, color or quantity is not available")
    } else {
        items.push(newItem)
        res.status(201).json({message:"Woohoo ! item added successfully !"})
    }
})

app.get("/items",(req,res)=>{
    res.json(items)
})

app.post("/movies",(req,res)=>{
    const { title, director, year } = req.body
    const newMovies = req.body
    if(!title || !director || !year) {
        res.status(400).json({error:"An Error occured while adding movies data"})
    } else {
        movies.push(newMovies)
        res.status(201).json({message:"Movies data added successfully"})
    }
})

const PORT = 5559

app.listen(PORT,()=>{
    console.log(`App is running at port ${PORT}`)
})