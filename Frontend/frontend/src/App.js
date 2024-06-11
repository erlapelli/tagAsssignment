import "./App.css";
import Barchart from "./Components/Barchart";
import Statistics from "./Components/Statistics";
import Transactions from "./Components/Transactions";


function App() {
  return (
    <div className="App">
      <Transactions/>
      <Statistics/>
      <Barchart/>
    </div>
  );
}

export default App;
