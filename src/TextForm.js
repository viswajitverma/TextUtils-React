import React, { useState } from 'react'

export default function TextForm(props) {
    const handleUpClick = ()=>{
        // console.log("Uppercase was Clicked" + text);
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to UpperCase!", "success");
    }

    const handleDownClick = ()=>{
        // console.log("Uppercase was Clicked" + text);
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to LowerCase!", "success");
    }

    const handleInverseClick = () => {
        // console.log("inverse click is triggered");
        let newtext = "";
        for (let i = text.length - 1; i >= 0; i--) {
          newtext += text[i];
        }
        setText(newtext);
        props.showAlert("Text Inverse!", "success");
    }

    const handleCopy = () => {
        var text = document.getElementById('myBox');
        text.select();
        navigator.clipboard.writeText(text.value);
        // alert('text copied successfully')
        props.showAlert("Text Copied!", "success");
    }

    const handleExtraSpace = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "))
        props.showAlert("Extra Spaces Removed!", "success");
    }

    const handleOnChange = (event)=>{
        console.log("On Change");
        setText(event.target.value);
    }

    const handleClearClick = ()=>{
        let newText = '';
        setText(newText);
        props.showAlert("Text Cleared!", "success");
    }
    
    const [count, setCount] = useState(0);
    const [text, setText] = useState('');  
    // text = 'New text' // wrong way to change the state
    // settext = 'New text' // correct way to change the state
    return (
        <>
        <div className="container" style={{color: props.mode==='dark'?'white':'#042743'}}>
            <h1>{props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control" onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'grey':'white', color: props.mode==='dark'?'white':'#042743'}} value={text} id="myBox" rows="8"></textarea>
            </div>
            <button className="btn btn-primary mx-2" onClick={handleUpClick}>Uppercase</button>
            <button className="btn btn-primary mx-2" onClick={handleDownClick}>Lowercase</button>
            <button className="btn btn-primary mx-2" onClick={handleInverseClick}>Inverse</button>
            <button className="btn btn-primary mx-2" onClick={handleCopy}>Copy Text</button>
            <button className="btn btn-primary mx-2" onClick={handleExtraSpace}>Remove Extra Spaces</button>
            <button className="btn btn-primary my-4" onClick={handleClearClick}>Clear</button>
            <p>You clicked {count} times</p>
            <button onClick={() => setCount(count + 1)}>
                Click me
            </button>
        </div>
        <div className="container my-6" style={{color: props.mode==='dark'?'white':'#042743'}}>
            <h1>Your text summary</h1>
            {/* <p>{text.split(" ").length} words, {text.length} characters</p> */}
            <p>{text.split(" ").length-1 } words and {1000-text.length-1} characters</p>
            <p>{0.008 * text.split(" ").length} Minutes reads</p>
            <h2>Preview</h2>
            <p>{text.length>0?text:"Enter Something in the text box to preview it here"}</p>
        </div>
        </>
  )
}
