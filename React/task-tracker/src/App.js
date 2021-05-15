// import React from 'react'
import Header from './components/Header'

function App() {
  const name = 'Pelumi'
  const x = true
  return (
    <div className="App">
      {/* <h1>Hello Task Tracker</h1> */}
      {/* <h2>Hello {name}</h2>
      <h3>Using react: {x ? 'Yes' : 'No'}</h3> */}
      <Header />
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
