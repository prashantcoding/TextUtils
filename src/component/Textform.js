import React ,{useState} from "react"
import  isupper from './fun.js'

export default function Textform(props) {
   
    const hadleUpclick=()=>{
            if(isupper(text)){
                setText(text.toLowerCase());
            }
            else{
                setText(text.toUpperCase());
            }
        
        
    };
    const handleOnchange=(event)=>{
        console.log("onchange");
        setText(event.target.value);
    };
    const[text,setText]=useState('');
  return (
      <>
    <div className="container">
      <h1>{props.title}</h1>
      
      <form>
        <div className="form-group my-3">
          <textarea
            className="form-control"
            id="mybox"
            rows="15"
            value={text}
            onChange={handleOnchange}
          ></textarea>
          
        </div>
      </form>
      
      <button className="btn btn-primary" onClick={hadleUpclick}>ConverToUppercase </button>
      
    </div>
    <div className="container">
        <h4>Total character{text.length} Total words{text.split(" ").length}  </h4>
        <p>{text}</p>
    </div>
    </>
    
  );
  
}

