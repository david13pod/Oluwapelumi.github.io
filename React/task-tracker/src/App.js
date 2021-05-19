// import React from 'react'
import Header from './components/Header'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'
import Footer from './components/Footer'
import About from './components/About'
import {useState, useEffect} from 'react'
import {BrowserRouter as Router, Route} from 'react-router-dom'

function App() {
  // const name = 'Pelumi'
  // const x = true
  const [showAddTask, setShowAddTask] = useState(false)
  const [tasks, settasks] = useState([])
  
  useEffect( () =>{
    const getTasks = async () => {
      const tasksFromServer= await fetchTasks()
      settasks(tasksFromServer)
    }
    
    getTasks()
  }, [] )

  //Fetch Tasks
  // load data when page is loading
  const fetchTasks = async () => {
    const res = await fetch('http://localhost:5000/tasks')
    const data = await res.json()

    // console.log(data)
    return data
  }

  //Fetch single task
  const fetchTask = async (id) => {
    const res = await fetch(`http://localhost:5000/tasks/${id}`)
    const data = await res.json()

    // console.log(data)
    return data
  }

  //Add submitted tasks
  const addTask =async(task) => {
    const res = await fetch('http://localhost:5000/tasks',
    {method:'POST',
    headers:{'content-type': 'application/json'},
    body: JSON.stringify(task)
    }
    )
    const data = await res.json()
    settasks([...tasks, data])
    // console.log(task)
    // const id=Math.floor(Math.random()*10000) + 1
    // const newTask={id, ...task}
    // settasks([newTask, ...tasks])
  }

  //Delete Tasks
  const deleteTask =async (id) => {
    await fetch(`http://localhost:5000/tasks/${id}`,
    {method:'DELETE'})
    // console.log('delete',id)
    settasks(tasks.filter( (task) => task.id !== id ))
  }

  // Toggle reminder
  const toggleReminder =async(id) =>{
    const taskToToggle=await fetchTask(id)
    const updTask= {...taskToToggle, reminder: !taskToToggle.reminder}

    const res = await fetch(`http://localhost:5000/tasks/${id}`,
    {method:'PUT',
    headers:{'content-type': 'application/json'},
    body: JSON.stringify(updTask)
    }
    )
    const data = await res.json()

    settasks(tasks.map( (task) => task.id === id ?
    {...task, reminder: data.reminder}:task ))
  }
  
  return (
    <Router>
    <div className="container">
      {/* <h1>Hello Task Tracker</h1> */}
      {/* <h2>Hello {name}</h2>
      <h3>Using react: {x ? 'Yes' : 'No'}</h3> */}
      <Header onAddBtn={() => setShowAddTask( !showAddTask)} 
      showAdd={showAddTask}/>
      
      

      <Route path='/' exact render={(props) => (
        <>
          {showAddTask && <AddTask onAdd={addTask} />}
      
          {tasks.length > 0 ? 
          (<Tasks tasks={tasks} onDelete={deleteTask} 
            onToggle={toggleReminder} />)
          :('No task to show')
          }
        </>
      )} />

      <Route path='/about' component={About} />

      <Footer />
    </div>
    </Router>
  );
}



// class method
// class App extends React.Component{
//   render(){
//     return <h1>Hello from class</h1>
//   }
// }
export default App;
