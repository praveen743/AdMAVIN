import logo from './logo.svg';
import './App.css';
import Task5 from './Task5';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Task3 from './Task3';
 import Task4 from './Task4';


function App() {
  return (
    <div>

<BrowserRouter>
         
                <Routes>
                <Route path="/" element={<Task5/>}></Route>
                <Route path="/i" element={<Task3/>}></Route>
                <Route path="/xo" element={<Task4/>}></Route>

  </Routes>
              
      </BrowserRouter >

    </div>
  );
}

export default App;
