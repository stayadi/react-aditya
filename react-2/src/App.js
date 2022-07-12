import './App.css';

import CurrentDate from './Components/CurrentDate';


function App() {
  
  return (
    <div className="container">
      <h2>What Date is it ? </h2>
      <CurrentDate currDate = {new Date() + ''}/>
     
    </div>
  );
}

export default App;
