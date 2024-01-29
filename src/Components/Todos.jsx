import { useEffect, useState } from "react";
import { FaTimes } from "react-icons/fa";

function Todos() {
  const [newTodo, setNewTodo] = useState("");
  const [todos, setTodos] = useState([]);
  function handleChange(e) {
    setNewTodo(e.target.value);
  }
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:3000/task", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ text: newTodo }),
      });
      if (response.ok) {
        await fetchTodos();
        setNewTodo("");
      } else {
        alert("Item not added");
      }
    } catch {
      console.log("Error!");
    }
  }
  const handleDelete= async(id) => {
    try{
      const response = await fetch(`http://localhost:3000/task/${id}`,{
        method: 'DELETE'
      })
      if(response.ok){
        setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
      }else{
        alert("error deleting item")
      }
    }catch{
      console.log('delete error')
    }
  }
  const fetchTodos = async () => {
    try {
      const response = await fetch("http://localhost:3000/task")
      if (response.ok) {
        const data = await response.json();
        setTodos(data);
      } else {
        alert("failed to fetch todos");
      }
    } catch {
      alert("error");
    }
  }
  useEffect(() => {
    fetchTodos()
  }, [])

  return (
    <section className="to-do-list">
      <div className="to-do-list-items">
        <h1>My Todo list</h1>
        {todos.map((todo) =>(
          <div key={todo.id} className="to-dos">
            <div className="item">
              <input type="checkbox" name="done" id="checkbox" />
              <span>{todo.text}</span>
            </div>
            <FaTimes onClick={() =>handleDelete(todo.id)}/>
          </div>
        ))}



      </div>
      <form className="todo-input" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Add item"
          id="item-add"
          value={newTodo}
          onChange={handleChange}
        />
        <button type="submit">Add</button>
      </form>
    </section>
  );
}
export default Todos;
