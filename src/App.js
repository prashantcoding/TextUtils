import './App.css';
import React ,{ useState} from 'react'

import Navbar from './component/Navbar';

import Textform from './component/Textform';
import Alert from './component/Alert';
import About from './component/About';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  
} from "react-router-dom";


function App() {
  const toogleMode=()=>{
    if(mode==='light'){
      setmode('dark')
      document.body.style.backgroundColor='#1e1e38';
      showAlert("Dark Mode is Activated",'success');
      document.title=' TextUtils Dark Mode'
    }
    else{
      setmode("light")
      document.body.style.backgroundColor='white';
      showAlert("light Mode is Activated",'success');
      document.title=' TextUtils Light Mode'
    }
  }
  const showAlert=(message,type)=>{
      setalert({
        msg:message,
        type:type
      })
      setTimeout(() => {
        setalert("null")
      }, 2000);}
  const [mode, setmode] = useState('light')
  const [alert, setalert] = useState(null)
  return (
    <>
   <Router>
   <Navbar title="TextUtils" mode={mode} toggleMode={toogleMode}/>
   <Alert alert="This is a Alert" Alert={alert}/>
   <Switch>
          <Route exact path="/about">
            <About />
          </Route>
          <Route exact path="/">
          <Textform mode={mode} title="ENTER YOUR TEXT"/> 
            </Route>
        </Switch>
        </Router>
   </>
  );
}

export default App;
