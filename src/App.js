import Header from "./Components/Header";
import Tasks from "./Components/Tasks";
import { useState, useEffect } from "react";
import AddTask from "./Components/AddTask";
import Footer from "./Components/Footer";
import {BrowserRouter as Router, Route} from 'react-router-dom'
import About from "./Components/About"

function App() {
  const [showAddTask, setShowAddTask] = useState(false);

  const [tasks, setTasks] = useState([]);
  useEffect(() => {
    const tasksFromServer = async () => {
      const ts = await fetchTask();
      setTasks(ts);
    };

    tasksFromServer();
  }, []);

  //FETCHING DATA FROM THE JSON SERVER
  const fetchTask = async () => {
    const res = await fetch("http://localhost:5000/tasks");
    const data = await res.json();
    return data;
  };

  const fetchSpecificTask = async (id) => {
    const res = await fetch(`http://localhost:5000/tasks/${id}`);
    const data = await res.json();
    return data;
  };

  //SETTING A NEW TASK IN THE TASKS LIST
  const addTask = async (task) => {
    const id = Math.floor(Math.random() * 1000) + 1;
    const newTask = { id, ...task };
    const res = await fetch("http://localhost:5000/tasks", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(newTask),
    });
    const data = await res.json();
    setTasks([...tasks, data]);
  };

  //TOGGLE THE REMINDER IN A TASK
  const toggleTask = async (id) => {
    const toToggleTask = await fetchSpecificTask(id);
    const updTask = { ...toToggleTask, reminder: !toToggleTask.reminder };

    const res = await fetch(`http://localhost:5000/tasks/${id}`, {
      method: "PUT",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(updTask),
    });
    const data = await res.json();

    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, reminder: data.reminder } : task
      )
    );
  };

  //DELETE A TASK FROM THE LIST
  const delTask = async (id) => {
    await fetch(`http://localhost:5000/tasks/${id}`, { method: "DELETE" });
    setTasks(tasks.filter((task) => task.id !== id));
  };

  return (
    <Router>
    <div className="container">
      <Header
        onAdd={() => setShowAddTask(!showAddTask)}
        title="Task Tracker"
        showAddTask={showAddTask}
      />
    

        <Route path='/' exact render= {(props)=>(<>
          {showAddTask && <AddTask onAdd={addTask} />}

{tasks.length > 0 ? (
  <Tasks tasks={tasks} onDelete={delTask} onToggle={toggleTask} />
) : (
  <h3 style={{ color: "green" }}>"You have nothing to do."</h3>
)}
        </>)}/>
        
      <Route component={About} path='/about'/>

      <Footer/>
    </div>
    </Router>
  );
}

export default App;
