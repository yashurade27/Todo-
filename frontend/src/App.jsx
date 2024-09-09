import { useEffect, useState } from 'react';
import './App.css';
import { CreateTodo } from './components/CreateTodo';
import { TodoItem } from './components/CompletedTodo';

function App() {
  const [todos, setTodos] = useState([]);

  
  useEffect(() => {
    const fetchTodos = async () => {
      const response = await fetch("http://localhost:3000/todos");
      const data = await response.json();
      setTodos(data.todos);
    };

    fetchTodos();
  }, []);

  return (
    <div>
      <CreateTodo />
      {todos.map((todo) => (
        <TodoItem key={todo._id} todo={todo} /> 
      ))}
    </div>
  );
}

export default App;
