import './App.css'; 
//import ColorSchemesExample from "./ColorSchemesExample" ;

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'

function App() {
  return (

   


    <div className="bg-container">
    <FontAwesomeIcon icon="check-square" />
    <FontAwesomeIcon icon="fa-duotone fa-user-tie-hair" />
    <FontAwesomeIcon icon="fa-light fa-user-tie-hair" />
    
    <div className="App">
      <h1 className="navitems">Home</h1>
      <h1 className="navitems">Profile</h1>
      <h1 className="navitems">Tasks</h1>
      <h1 className="navitems">Performance</h1>
      <button className="button">Logout</button> 
    </div>


    </div>
  ); 
}

export default App;
