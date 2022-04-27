import React from 'react';
import classes from './FileUpload.module.css'

import UploadIcon from '../../../assets/icons/upload.svg'


const FileUpload = ({onChangeFile, onBlur, ...props}) => {
  


  return (
    <div className={classes.file_upload}>
        <img src={UploadIcon} alt="" />
        <label htmlFor="file"><a  >
          Add File
        </a></label>
        
      
      <input id='file' 
             type="file"
             onChange={onChangeFile}
             style={{display:'none'}} 
             multiple
             onBlur={(e) => onBlur(e, 'images')}
             {...props}
      /> 

      <p>
        Upload product image
      </p>
    </div>
  );
};
export default FileUpload