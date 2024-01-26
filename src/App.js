
import Header from "./components/Header";
import AddTask from "./components/AddTask";
import Tasks from "./components/Tasks";
import {useState} from 'react';

function App() {
  const [tasks, setTasks] = useState([
    {
        id: 1,
        text: 'Doctors Appointment',
        day: 'Feb 5th at 2:30pm',
        reminder: true,
    },
    {
        id: 2,
        text: 'Meeting at weork',
        day:'Jan 30th at 3pm',
        reminder: true,
    },
    {
        id: 3,
        text:'Grocery shopping',
        day: 'Jan 27th at 12pm',
        reminder: false,
    }
])
  //delete task
  const deleteTask =(id)=>{
    setTasks(tasks.filter((task)=>task.id !== id))
  }

  //Toggle Reminder
  const toggleReminder = (id) =>{
    setTasks(
      tasks.map((task)=> task.id === id ? {...task, reminder:
        !task.reminder} : task
      )
    )
  }

  //Add Task
  const AddTask = (task) => {
    console.log(task);
  }
  return (
    <div className='container'>
      <Header />
      <AddTask />
      {tasks.length > 0 ? (
      <Tasks tasks={tasks} onDelete={deleteTask} 
      onToggle={toggleReminder}/>
      ) : (
        'No Tasks To Show'
      )}
    </div>
  );
}


export default App;
