import Alert from './Alert';
import './App.css';
import TextForm from './TextForm';
// import About from './components/About';
import Navbar from './components/Navbar';
import React,{useState} from 'react';
// import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';

function App() {

/*
  const [myStyle, setMyStyle] = useState({
    color: 'black',
    backgroundColor: 'white',
    
})

const [btnText, setBtnText] = useState('Enable Dark Mode')

const toogleStyle = ()=>{
    if(myStyle.color === 'black'){
        setMyStyle({
            color: 'white',
            backgroundColor: 'black',
            border: '1px solid white'
        })
        setBtnText('Enable Light Mode')
    }
    else{
        setMyStyle({
            color: 'black',
            backgroundColor: 'white'
        })
        setBtnText('Enable Dark Mode')
    }
}*/

const [mode, setMode] = useState('light'); //Wheather dark mode is enable or not
const [alert, setAlert] = useState(null); 

const showAlert = (message, type)=> {
  setAlert({
    msg: message,
    type: type
  })
  setTimeout(() => {
    setAlert(null);
  }, 1500);
}

const toogleMode = ()=>{
  if(mode === 'light'){
    setMode('dark');
    document.body.style.backgroundColor = '#042743';
    showAlert('Dark Mode Enabled', 'success');
    document.title = "TextUtils - DarkMode";
    // setInterval(() => {
    //   document.title = "TextUtils is Amazing";
    // }, 2000);                     
                //This function is use to generate the function again and again(Ads in btw Any browser) 
    // setInterval(() => {
    //   document.title = " Install TextUtils Now!!!!!!!";
    // }, 1500);
  }
  else{
    setMode('light');
    document.body.style.backgroundColor = 'white';
    showAlert('Light Mode Enabled', 'success');
    document.title = "TextUtils - LightMode";
  }
  
}

  return (
    <>
    {/* <body className="bd"> */}
      {/* <Router> */}
      <div className="blank">
        <h1>Text Utils</h1>
        {/* <div className="mode">
              <button onClick={toogleStyle} type='button' className="btn btn-primary my-3">{btnText}</button>
          </div> */}
      </div>
      <Navbar title="WebPage" aboutText="About" mode={mode} toogleMode={toogleMode}/>

      <Alert alert={alert} />
      <div className="container my-4">

        {/* <Routes>
          <Route exact path='/about' element={<About />} />
          <Route exact path='/' element={} /> 
          
        </Routes> */}
        <TextForm showAlert={showAlert} heading="Enter the Text to Analyze" mode={mode}/>
      </div>
      {/* </Router> */}
    {/* </body> */}
    </>
    
  );
}

export default App;
