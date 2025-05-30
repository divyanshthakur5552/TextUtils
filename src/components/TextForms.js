import React, { useState } from 'react';
import PropTypes from 'prop-types';
import "bootstrap/dist/css/bootstrap.min.css";

export default function TextForms(props) {
    const [text, setText] = useState('');
    const [isFirstInput, setIsFirstInput] = useState(true);
    const [findText, setFindText] = useState('');
    const [replaceText, setReplaceText] = useState('');
    const [isFindReplaceVisible, setIsFindReplaceVisible] = useState(false); // State to control visibility of Find & Replace

    const handleUpClick = () => {
        console.log("Uppercase was clicked" + text);
        let newText = text.toUpperCase();
        setText(newText);
        props.showalert("Converted to uppercase", "success");
    };

    const handleLoClick = () => {
        console.log("Lowercase was clicked" + text);
        let newText = text.toLowerCase();
        setText(newText);
        props.showalert("Converted to lowercase", "success");
    };

    const handleOnChange = (event) => {
        console.log("on change");
        if (isFirstInput) {
            setText('');
            setIsFirstInput(false);
        } else {
            setText(event.target.value);
        }
    };

    const handleClear = () => {
        console.log("clear was clicked");
        let newText = '';
        setText(newText);
        props.showalert("Text cleared", "success");
    };

    const handleCapitle = () => {
        console.log("capitalize was clicked");
        let newText = text.split('.').map(sentence => sentence.charAt(0).toUpperCase() + sentence.slice(1)).join('.');
        setText(newText);
        props.showalert("Text capitalized", "success");
    };

    const handleCopy = () => {
        console.log("copy was clicked");
        navigator.clipboard.writeText(text);
        props.showalert("Text copied to clipboard", "success");
    };

    const handleSpace = () => {
        console.log("remove extra spaces was clicked");
        let newText = text.split(/\s+/).filter(word => word !== "").join(" ");
        setText(newText);
        props.showalert("Extra spaces removed", "success");
    };

    const handleDownload = () => {
        console.log("download was clicked");
        const element = document.createElement("a");
        const file = new Blob([text], { type: 'text/plain' });
        element.href = URL.createObjectURL(file);
        element.download = "text.txt";
        document.body.appendChild(element); // Required for this to work in FireFox
        element.click();
        props.showalert("Text downloaded", "success");
    };

    const toggleFR = () => {
        console.log("find and replace was clicked");
        setIsFindReplaceVisible(!isFindReplaceVisible); // Toggle visibility
    };

    const handleReplace = () => {
        let newText = text.replace(new RegExp(findText, 'g'), replaceText);
        setText(newText);
        props.showalert("Text replaced", "success");
        setIsFindReplaceVisible(false); // Hide the div after replacing
    };

    return (
        <>
            <div className='container'>
                <h1>{props.heading}</h1>
                <div className="mb-3">
                    <textarea
                        className="form-control"
                        value={text}
                        onChange={handleOnChange}
                        style={{
                            background: props.mode === 'light' ? 'white' : '#212529',
                            color: props.mode === 'light' ? 'black' : 'white'
                        }}
                        id="myBox"
                        rows="8"
                        placeholder='Enter your text here'
                    ></textarea>
                    <button className="btn btn-primary my-3 mx-1" onClick={handleUpClick}>Convert To UpperCase</button>
                    <button className="btn btn-primary my-3 mx-1" onClick={handleLoClick}>Convert To LowerCase</button>
                    <button className="btn btn-primary my-3 mx-1" onClick={handleClear}>Clear</button>
                    <button className="btn btn-primary my-3 mx-1" onClick={handleCapitle}>Capitalize</button>
                    <button className="btn btn-primary my-3 mx-1" onClick={handleCopy}>Copy Text</button>
                    <button className="btn btn-primary my-3 mx-1" onClick={handleSpace}>Remove Extra Spaces</button>
                    <button className="btn btn-primary my-3 mx-1" onClick={handleDownload}>Download</button>
                    <button className="btn btn-primary my-3 mx-1" onClick={toggleFR}>Find & Replace</button>
                </div>

                {/* Hidden Find & Replace Div */}
                {isFindReplaceVisible && (
                    <div className='container my-3'>
                        <input style={{ width: '200px',padding: '5px' }}
                            type='text'
                            value={findText}
                            onChange={(e) => setFindText(e.target.value)}
                            placeholder="Find this text"
                        />
                        <input style={{ width: '200px',padding: '5px' }}
                            type='text'
                            value={replaceText}
                            onChange={(e) => setReplaceText(e.target.value)}
                            placeholder="Replace with this text"
                        />
                        <button className="btn btn-primary mx-2" onClick={handleReplace}>Replace</button>
                    </div>
                )}
            </div>

            <div className="container" style={{ color: props.mode === 'light' ? 'Black' : 'white' }}>
                <h1>Your Text Summary</h1>
                <p>{text.split(" ").filter(word => word !== "").length} words and {text.length} characters</p>
                <p>{(0.08 * text.split(" ").filter(word => word !== "").length).toFixed(2)} minutes to read</p>
                <h2>Preview</h2>
                <p>{text}</p>
            </div>
        </>
    );
}

TextForms.propTypes = {
    heading: PropTypes.string.isRequired
};  