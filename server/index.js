require('dotenv').config({path:'../.env'});

const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const TodoModel = require('./model/Todo.js')




const app = express()
app.use(cors())
app.use(express.json())

const mongoURI = process.env.MONGO_URI
console.log("MongoDB_URI:",mongoURI)

if (!mongoURI) {
    console.error(" Error: MONGO_URI is not defined in .env file!");
    process.exit(1);
}
mongoose.connect(mongoURI,{

})
.then(()=>console.log("MongoDB Connected"))
.catch(err => console.error("MongoDB Connection Error",err))


app.get('/get', (req, res) => {
    TodoModel.find()
        .then(result => res.json(result))
        .catch(err => res.status(500).json(err)) 
})


app.put('/update/:id', async (req, res) => {
    try {
        const { id } = req.params
        const todo = await TodoModel.findById(id)

        if (!todo) {
            return res.status(404).json({ error: "Task not found" })
        }

        todo.done = !todo.done 
        await todo.save()

        res.json(todo)
    } catch (err) {
        res.status(500).json(err)
    }
})


app.delete('/delete/:id', (req, res) => {
    const { id } = req.params

    TodoModel.findByIdAndDelete(id)
        .then(result => {
            if (!result) {
                return res.status(404).json({ error: "Task not found" })
            }
            res.json({ message: "Task deleted successfully" })
        })
        .catch(err => res.status(500).json(err))
})


app.post('/add', (req, res) => {
    console.log("Received Data", req.body)

    const { task } = req.body 

    if (!task) {
        return res.status(400).json({ error: "Task is required" }) 
    }

    TodoModel.create({ task: task, done: false }) 
        .then(result => res.json(result))
        .catch(err => res.status(500).json(err))
})


app.listen(3001, () => {
    console.log("Server is Running on port 3001")
})