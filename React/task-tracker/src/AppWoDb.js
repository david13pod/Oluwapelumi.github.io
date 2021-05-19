// import React from 'react'
import Header from './components/Header'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'
import {useState} from 'react'

function App() {
  // const name = 'Pelumi'
  // const x = true
  const [showAddTask, setShowAddTask] = useState(false)
  const [tasks, settasks] = useState([
    {
      id: 1,
      text:"Doctors Appointment",
      day:"Feb 11 2021 2:00pm",
      reminder: true
  },
  {
      id: 2,
      text:"School Appointment",
      day:"Feb 20 2021 9:00am",
      reminder: true
  },
  {
      id: 3,
      text:"Church Appointment",
      day:"Feb 25 2021 12:00pm",
      reminder: false
  }
  ])
  

  //Add submitted tasks
  const addTask =(task) => {
    // console.log(task)
    const id=Math.floor(Math.random()*10000) + 1
    const newTask={id, ...task}
    settasks([newTask, ...tasks])
  }

  //Delete Tasks
  const deleteTask =(id) => {
    // console.log('delete',id)
    settasks(tasks.filter( (task) => task.id !== id ))
  }

  // Toggle reminder
  const toggleReminder =(id) =>{
    settasks(tasks.map( (task) => task.id === id ?
    {...task, reminder: !task.reminder}:task ))
  }
  
  return (
    <div className="container">
      {/* <h1>Hello Task Tracker</h1> */}
      {/* <h2>Hello {name}</h2>
      <h3>Using react: {x ? 'Yes' : 'No'}</h3> */}
      <Header onAddBtn={() => setShowAddTask( !showAddTask)} 
      showAdd={showAddTask}/>
      
      {showAddTask && <AddTask onAdd={addTask} />}
      
      {tasks.length > 0 ? 
      (<Tasks tasks={tasks} onDelete={deleteTask} 
        onToggle={toggleReminder} />)
      :('No task to show')
      }
    </div>
  );
}



// class method
// class App extends React.Component{
//   render(){
//     return <h1>Hello from class</h1>
//   }
// }
export default App;
