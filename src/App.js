import React, { useState } from 'react';


function App() {
  
  const [textboxValues, setTextboxValues] = useState({});
  const [checkboxValues, setCheckboxValues] = useState({});

  const handleTextboxChange = (e) => {
    setTextboxValues((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleCheckboxChange = (e) => {
    setCheckboxValues((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.checked,
    }));
  };
  return (
    

    <div>
    <h1>Web Page 1</h1>

    <div>
      <label htmlFor="textbox1">Textbox 1:</label>
      <input
        type="text"
        id="textbox1"
        name="textbox1"
        value={textboxValues['textbox1'] || ''}
        onChange={handleTextboxChange}
      />
      <input
        type="checkbox"
        id="checkbox1"
        name="checkbox1"
        checked={checkboxValues['checkbox1'] || false}
        onChange={handleCheckboxChange}
      />
      <label htmlFor="checkbox1">Checkbox 1</label>
    </div>

    <div>
      <h1>Web Page 2</h1>

      <div>
        <input
          type="checkbox"
          id="checkbox1"
          name="checkbox1"
          checked={checkboxValues['checkbox1'] || false}
          onChange={handleCheckboxChange}
        />
        <label htmlFor="checkbox1">1. Checkbox 1</label>
      </div>

      {/* Repeat the above div for each checkbox */}

      <div>
        {/* Real-time data will be displayed here */}
        {checkboxValues['checkbox1'] ? (
          <p>Checkbox 1 is checked.<br/>{textboxValues['textbox1']}</p>
          
        ) : (
          <p>Checkbox 1 is not checked.</p>
        )}
        
        
      </div>
    </div>

    {/* Repeat the above div for each additional textbox and checkbox */}
  </div>

  
  );
}

export default App;
