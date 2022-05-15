import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
//import About from './components/About';
import { useState } from 'react';
import Alert from './components/Alert';
//import {
  //BrowserRouter as Router,
  //Routes,
  //Route,
  //Link
//} from "react-router-dom";


function App() {
  const [mode,setMode] = useState('light'); //whether dark mode is on or off
  const [alert,setAlert] = useState(null);//we are making alert as an object here

  const showAlert = (message,type)=>{
    setAlert({
      msg:message,
      type: type
    })
    setTimeout(()=>{
      setAlert(null)
    },1600);

  }
  const toggleMode = ()=>{
    if(mode==='light'){
      setMode('dark');
      document.body.style.backgroundColor='grey';
      showAlert("Dark mode has been enabled","success");
      //document.title=("TextUtils - Dark Mode");
    }
    else{
      setMode('light');
      document.body.style.backgroundColor='white';
      showAlert("Light mode has been enabled","success");
      //document.title=("TextUtils - Light Mode");
    }
  }
  return (
      <>
      {/*<Router>*/}
      <Navbar title="Textutil App" about="About TextUtils" mode={mode} toggleMode={toggleMode}></Navbar>
      <Alert alert={alert}/>
      <div className="container">
        <Textform heading="Enter the text to be analysed:" mode={mode} showAlert={showAlert}/>
      {/*<Routes>
            <Route exact path="/about" element={<About mode={mode}/>}>
            </Route>
            <Route exact path="/" element={<Textform heading="Enter the text to be analysed:" mode={mode} showAlert={showAlert}></Textform>}>
            </Route>
          </Routes>*/}
      </div>
      {/*</Router>*/}
      </>

  );
}

export default App;
