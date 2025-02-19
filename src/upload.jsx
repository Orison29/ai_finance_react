import React, { useState, useRef } from 'react';
const FileUploader = () => {
  const [fileUploaded, setFileUploaded] = useState(false);
  const fileInputRef = useRef(null);

  const handleButtonClick = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = (event) => {
    const files = event.target.files;
    if (files.length > 0) {
      console.log('Selected file:', files[0]);
      setFileUploaded(true); // Update state to indicate a file was uploaded
    }
  };

  return (
    <div>
      {!fileUploaded ? (
        <div className='Upload-btn'>
        <div className="input-btn">
        <button onClick={handleButtonClick} style={{ padding: '10px 20px', cursor: 'pointer' }}>
          Upload File
        </button>
        </div>
        </div>
      ) : (
        <div className='data'>
          <div className="charts">
            <h2>Charts</h2>
            <img src="./src/assets/chart.png" alt="" />
            <img src="./src/assets/chart.png" alt="" />
          </div>
          <div className="analysis">
        <div className="analysis">
            <h2>Analysis</h2>
            <div>
            <ol>
                <li>
                    <p>Profitability Analysis</p>
                    <ul>
                        <li>Observation: Products A, B, and D have consistently shown high profitability over the past six months, contributing to 70% of the total profit.</li>
                        <li>Insight: Product C shows a loss in 4 out of 6 months, driven by high costs relative to revenue</li>
                        <li>Action: Investigate potential cost reductions for Product C, renegotiate supplier contracts, or consider phasing out the product.</li>
                    </ul>
                </li>
                <li>
                    <p>Profitability Analysis</p>
                    <ul>
                        <li>Observation: Products A, B, and D have consistently shown high profitability over the past six months, contributing to 70% of the total profit.</li>
                        <li>Insight: Product C shows a loss in 4 out of 6 months, driven by high costs relative to revenue</li>
                        <li>Action: Investigate potential cost reductions for Product C, renegotiate supplier contracts, or consider phasing out the product.</li>
                    </ul>
                </li>
                
            </ol>
            </div>
        </div>
          </div>
        </div>
      )}
      <input
        type="file"
        ref={fileInputRef}
        style={{ display: 'none' }}
        onChange={handleFileChange}
      />
    </div>
  );
};

export default FileUploader;
