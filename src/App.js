import React, { useState } from 'react';
import Navbar from './components/Navbar';
import TextForms from './components/TextForms';
import Alert from './Alert';
import About from './components/About';
import {
  BrowserRouter as Router,
  Routes,
  Route,

} from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light'); 
  const [alert, setAlert] = useState(null);

  const showalert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  const toggleMode = () => {
    if (mode === 'dark') {
      setMode('light');
      document.body.style.background = 'white';
      showalert("Light mode has been enabled", "success");
    } else {
      setMode('dark');
      document.body.style.background = '#212529';
      showalert("Dark mode has been enabled", "success");
    }
  };

  return (
    <>
      <Router>
        <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} aboutText="About Us" />
        <Alert alert={alert} />
        <div className='container my-3'>
          <Routes>
            <Route path="/about" element={<About mode={mode}/>} />
            <Route path="/" element={<TextForms showalert={showalert} mode={mode} />} />
             <Route path="*" element={<TextForms showalert={showalert} mode={mode} />} /> {/* fallback */}
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
