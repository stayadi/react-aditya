import './App.css';
import Child from './Components/Child';


function App() {
  return (
    <div className="container">
    <Child state = "DEFAULT"/>
    <Child state = "BAR"/>
    <Child state = "FOO"/>
    </div>
  );
}

export default App;
