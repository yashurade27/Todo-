import React, { useState, useEffect } from 'react';
import { Completed } from './src/components/CompletedTodo';

function TodoList() {
    const [todos, setTodos] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3000/todos')
            .then((response) => response.json())
            .then((data) => {
                setTodos(data.todos);
            });
    }, []);

    return (
        <div>
            <h1>Todo List</h1>
            <ul>
                {todos.map((todo, index) => (
                    <li key={index}>
                        <h2>{todo.title}</h2>
                        <h2>
                        <p>{todo.description}</p></h2>
                        <Completed></Completed>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default TodoList;
