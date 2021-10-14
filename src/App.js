import './App.css';
import React ,{ useState} from 'react'

import Navbar from './component/Navbar';

// import Textform from './component/Textform';
import Alert from './component/Alert';



function App() {
  const toogleMode=()=>{
    if(mode==='light'){
      setmode('dark')
      document.body.style.backgroundColor='#1e1e38';
      showAlert("Dark Mode is Activated",'success');
    }
    else{
      setmode("light")
      document.body.style.backgroundColor='white';
      showAlert("light Mode is Activated",'success');

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
   <Navbar title="TextUtils" mode={mode} toggleMode={toogleMode}/>
   <Alert alert="This is a Alert" Alert={alert}/>
   {/* <Textform mode={mode} title="ENTER YOUR TEXT"/> */}
   </>
  );
}

export default App;
