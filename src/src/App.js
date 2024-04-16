import logo from './logo.svg';
import './App.css';
import { Header } from "./component/Header";
import Dashboard from "./component/Dashboard";
import Note from "./component/Note";
import Nesting from "./component/Nesting";
import AddNotes from "./component/AddNotes";
function App() {

  return (
    <div className='container'>
      <Header />
      <AddNotes/>

      <Dashboard name="Madhu" />
      <Note/>
      <Nesting/>
    </div>
    // <div>
    // <h1>This is React App</h1>
    // </div>
  );
}

export default App;