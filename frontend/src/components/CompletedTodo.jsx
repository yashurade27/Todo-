import { useState } from 'react';

export function TodoItem({ todo }) {
    const [isCompleted, setIsCompleted] = useState(todo.completed);
    const markAsCompleted = () => {
        fetch("http://localhost:3000/completed", {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ id: todo._id }),
        })
        .then((res) => {
            if (res.ok) {
                setIsCompleted(true);
                alert("Todo marked as completed!");
            } else {
                alert("Failed to mark as completed");
            }
        });
    };
   
    return (
        
        <div style={{ color: "white" }}>
            <h2>{todo.title}</h2>
            <p>{`>> `}{todo.description}</p>
            <br />
            <button className="button-17" role="button" onClick={markAsCompleted} disabled={isCompleted}>
                {isCompleted ? "Completed" : "Mark as Completed"}
            </button>
            <br /><br />
        </div>
    );
}

