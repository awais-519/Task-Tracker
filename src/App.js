import Header from "./Components/Header";
import Tasks from "./Components/Tasks";
import { useState } from "react";
import AddTask from "./Components/AddTask";

function App() {
  let [tasks, setTasks] = useState([
    {
      id: 1,
      name: "Doctors Appointment",
      schedule: "Monday at 1:00pm",
      reminder: true,
    },
    {
      id: 2,
      name: "School Work",
      schedule: "Tue at 2:00pm",
      reminder: true,
    },
    {
      id: 3,
      name: "Cricket Match",
      schedule: "Sunday at 9:00am",
      reminder: false,
    },
  ]);

  const addTask = (task) => {
    console.log(task);
    const id = Math.floor(Math.random() * 1000 + 1);
    const newTask = { id, ...task };
    setTasks([...tasks, newTask]);
  };

  //TOGGLE THE REMINDER IN A TASK
  const toggleTask = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, reminder: !task.reminder } : task
      )
    );
  };

  //DELETE A TASK FROM THE LIST
  const delTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  return (
    <div className="container">
      <Header title="Task Tracker" />
      <AddTask onAdd={addTask} />
      {tasks.length > 0 ? (
        <Tasks tasks={tasks} onDelete={delTask} onToggle={toggleTask} />
      ) : (
        <h3 style={{ color: "green" }}>"You have nothing to do."</h3>
      )}
    </div>
  );
}

export default App;
