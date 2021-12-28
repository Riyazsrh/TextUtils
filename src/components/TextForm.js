import React,{useState} from "react";



export default function TextForm(props){
 const handleUpClick = () =>{
 let newText = text.toUpperCase();
 setText(newText)
 props.showAlert("Converted to UpperCase ","success")
 }


 const handleLowClick = () =>{
  let newText = text.toLowerCase();
  setText(newText)
  props.showAlert("Converted to LowerCase ","success")
  }


const handleCopyText = () =>{
  var text = document.getElementById("exampleFormControlTextarea1");
  navigator.clipboard.writeText(text.value)
  props.showAlert("Text Copied " , "success")
}


const handleExtraSpaces = () =>{
  let newText =text.split(/[ ]+/);
  setText(newText.join(" "))
  props.showAlert("Extra Spaces removed ","success")
}


const handleClear = () =>{
  setText((" "))
  props.showAlert("ClearAll ","success")
}


 const handleOnChang = (event) =>{
  setText(event.target.value)
  }

  const [text, setText] = useState('');
  return (
    <>
    <div style={{color:props.mode==='dark'?'white':'#042743'}}>
        <h1 >{props.heading}</h1>
      <div className="mb-3"   >
        <label htmlFor="myBox" className="form-label">Here⬇️</label>
        <textarea className="form-control" value={text} onChange={handleOnChang} style={{backgroundColor:props.mode==='dark'?'#13466e':'white',color:props.mode==='dark'?'white':'#042743'}}  id="exampleFormControlTextarea1" rows="8"></textarea>
      </div>
      <button disabled={text.length===0} className="btn btn-primary me-5"onClick={handleUpClick} >Convert to Uppercase</button>
      <button disabled={text.length===0} className="btn btn-primary me-5"onClick={handleLowClick} >Convert to Reverse</button>
      <button disabled={text.length===0} className="btn btn-primary me-5"onClick={handleCopyText} >copy text</button>
      <button disabled={text.length===0} className="btn btn-primary me-5"onClick={handleExtraSpaces} >Remove Extra spaces</button>
      <button disabled={text.length===0} className="btn btn-primary me-5"onClick={handleClear} >ClearAll</button>
    </div>
    <div className="container my-3"    style={{color:props.mode==='dark'?'white':'#042743'}}>
      <h1>Your Text Summary</h1>
      <p>{text.split (" ") .filter((element)=>{return element.length!==0}) .length} words and {text.length} characters</p>
      <p>{0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length} Minutes to read </p>
    </div>
    </>
  );
}
