import React from 'react';
import logo from './logo.svg';
import './App.css';





class App extends React.Component {
  componentDidMount()
  {
   setTimeout(()=>{ alert("Hello"); }, 3000)
  };
  componentWillMount()
  {
    alert("Goodbye");
  }

  render(){
  
    return (
      <div className="App">
   
<h1>Khalil</h1>

        
 
      </div>
    );
  }


  }
 

export default App;
