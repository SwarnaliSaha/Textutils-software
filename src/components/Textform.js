import React , {useState} from 'react'

export default function Textform(props) {
  const handleUpClick = ()=>{
    console.log("clicked" + text);
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to upper-case","success");
  }
  const handleLoClick = ()=>{
    console.log("clicked" + text);
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to lower-case","success");
  }
  const clearText = ()=>{
    console.log("clicked" + text);
    let newText = '';
    setText(newText);
    props.showAlert("The text has been removed","success");
  }

  const handleCopy = ()=>{
    var toCopy = document.getElementById("myText");
    toCopy.select();
    navigator.clipboard.writeText(toCopy.value);
    props.showAlert("Text has been copied to the clipboard","success");
  }

  const removeExtraSpaces = ()=>{
    let updated_text = text.split(/[  ]+/);
    setText(updated_text.join(" "));
    props.showAlert("All the extra spaces have been removed","success");
  }
  
  const handleOnChange = (event)=>{
    console.log("On change");
    setText(event.target.value)
  }

  const [text, setText] = useState(''); //setText:updated text; text:default 
  return (
    <>
      <div className='container' style={{color:props.mode==='dark'?'white':'black'}}>
          <h1 className="mb-5">{props.heading}</h1>
          <div className="mb-3">
          <textarea className="form-control" id="myText" value = {text} onChange={handleOnChange} rows="8" style={{backgroundColor:props.mode==='dark'?'#283f34':'white' , color:props.mode==='dark'?'white':'black'}}></textarea>
          </div>
          <button disabled={text.length===0} className="btn btn-primary mx-2 my-2 " onClick={handleUpClick}>Convert to Uppercase</button>
          <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleLoClick}>Convert to Lowercase</button>
          <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={clearText}>Clear Text</button>
          <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleCopy}>Copy Text</button>
          <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={removeExtraSpaces}>Remove Extra Spaces</button>
      </div>
      <div className="container my-3" style={{backgroundColor:props.mode==='dark'?'#595151':'white' , color:props.mode==='dark'?'white':'black' }}>
        <h2>Your text summmay</h2>
        <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words, {text.length} characters</p>
        <p>{0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length} Minutes to read {text.length} characters</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Please enter your text for preview"}</p>
      </div>
      </>
  )
}
