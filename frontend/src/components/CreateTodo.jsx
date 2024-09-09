import { useState } from 'react';

export function CreateTodo() {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    
    return (
        <div>
           <div>
  <div className="input">
    <input 
      type="text" 
      placeholder="title" 
      onChange={(e) => setTitle(e.target.value)} 
    />
    <span></span>
  </div>
  <br />

  <div className="input">
    <input 
      type="text" 
      placeholder="description" 
      onChange={(e) => setDescription(e.target.value)} 
    />
    <span></span>
  </div>
  <br />
</div>

<button className="button-17" role="button"
 onClick={() => {
    fetch("http://localhost:3000/todo", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            title: title,
            description: description,
        }),
    })
    .then(async (res) => {
        if (res.ok) {
            const json = await res.json();
            alert("Todo added: " + JSON.stringify(json));
        } else {
            alert("Failed to add todo");
        }
    });;
}}>
    Add a todo
</button>
<br /><br /><br />
    </div>
    );
}
