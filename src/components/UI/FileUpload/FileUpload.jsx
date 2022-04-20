import React from 'react';
import classes from './FileUpload.module.css'

import UploadIcon from '../../../assets/icons/upload.svg'


const FileUpload = props => {
  const hiddenFileInput = React.useRef(null);
  
  const handleClick = event => {
    hiddenFileInput.current.click();
  };
  const handleChange = event => {
    const fileUploaded = event.target.files[0];
    props.handleFile(fileUploaded);
  };

  return (
    <div className={classes.file_upload}>

      <img src={UploadIcon} alt="" />
      <button onClick={handleClick}>
        Add File
      </button>
      <input type="file"
             ref={hiddenFileInput}
             onChange={handleChange}
             style={{display:'none'}} 
             multiple
      /> 

      <p>
        Upload product image
      </p>
    </div>
  );
};
export default FileUpload