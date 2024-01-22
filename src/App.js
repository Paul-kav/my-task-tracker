
import Header from "./components/Header";
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
  return (
    <div className='container'>
      <Header />
      <Tasks tasks={tasks} onDelete={deleteTask}/>
    </div>
  );
}


export default App;
