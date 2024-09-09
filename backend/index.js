
const express = require("express");
const { createTodo } = require("./types");
const { todo } = require("./db");
const cors = require('cors');
const app = express();



app.use(cors());
app.use(express.json());

app.post("/todo", async function(req, res){
    const createPayload = req.body;
    const parsedPayload = createTodo.safeParse(createPayload);
    if (!parsedPayload.success){
        res.status(411).json({
            msg: "You sent the wrong inputs"
        });
        return;
    }
    await todo.create({
        title: createPayload.title,
        description: createPayload.description,
        completed: false
    });

    res.json({
        msg: "Todo created"
    });
});

app.get("/todos", async function(req, res){
    const todos = await todo.find({});
    res.json({
        todos
    });
});

app.put("/completed", async function(req, res) {
    const updatePayload = req.body;

    await todo.updateOne(
        { _id: updatePayload.id },  
        { $set: { completed: true } }
    );

    res.json({
        msg: "Todo marked as completed"
    });
});

app.listen(3000, () => console.log('Server running on port 3000'));
