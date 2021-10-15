import React ,{useState} from "react"


export default function Textform(props) {
   
  function isupper(text){
    for(let i=0;i<text.length;i++){
        var a=text[i];
        if(text[i]!==" ")
        if(a===a.toUpperCase()){
            return true;
        }
    }
    return false;
}
function countwords(str){
  str = str.replace(/(^\s*)|(\s*$)/gi,"");
  str = str.replace(/[ ]{2,}/gi,"");
  str = str.replace(/\n /,"\n");
  console.log(str);
  return str.split(' ').length;
}

  const hadleUpclick=()=>{
            if(isupper(text)){
                setText(text.toLowerCase());
                setToggleCase("Uppercase")
            }
            else{
                setText(text.toUpperCase());
                setToggleCase("LowerCase")
            }
        
        
    };
    const hadleUpClear=()=>{
      let tex='';
      setText(tex);
    };
    const handleOnchange=(event)=>{
        
        setText(event.target.value);
    };
    const[text,setText]=useState(' ');
    const[toggleCase,setToggleCase]=useState('UpperCase');
  return (
      <>
    <div className="container" style={{color:props.mode==='light'?'black':'white'}}>
      <h1>{props.title}</h1>
      
      <form>
        <div className="form-group my-3">
          <textarea
            className="form-control"
            id="mybox"
            rows="15"
            value={text}
            onChange={handleOnchange}
            style={{backgroundColor:props.mode==='light'?'white':'#1e1e38',color:props.mode==='light'?'black':'white'}}
          ></textarea>
          
        </div>
      </form>
      
      <button className="btn btn-primary mx-2" onClick={hadleUpclick}>Conver To {toggleCase}</button>
      <button className="btn btn-primary"  onClick={hadleUpClear}>Clear Text</button>
    </div>
    <div className="container" style={{color:props.mode==='light'?'black':'white'}}>
        <h4>Total character{text.length} Total words {text.split(/\s+/).filter((element)=>{return element.length!==0}).length} </h4>
        <p>{text}</p>
    </div>
    </>
    
  );
  
}

