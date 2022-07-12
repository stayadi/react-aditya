import './App.css';
import List from './Components/List';


function App() {
  
  return (
    <div className="container">
       <h1>To Do Lists</h1>
       <h2>Today</h2>
       <List tasks = {["Walk", "Cook", "Bake"]}/>
      <h2>Tomorrow</h2>
      <List tasks = {["Study", "Code", "Eat"]}/>
    </div>
  );
}

export default App;
