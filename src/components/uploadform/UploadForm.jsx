import React, { useState } from "react";
import "../../styles/UploadForm.css";
import { ProgressBar } from "../index";

const UploadForm = () => {
  const types = ["image/png", "image/jpeg"];
  const [error, setError] = useState(null);
  const [file, setFile] = useState(null);
  const changeHandler = (e) => {
    let selected = e.target.files[0];

    if (selected && types.includes(selected.type)) {
      setFile(selected);
      setError("");
    } else {
      setFile(null);
      setError("Select an image file (png of jpeg)");
    }
  };
  return (
    <form>
      <label>
        <input type="file" onChange={changeHandler} />
        <span>+</span>
      </label>
      <div className="output">
        { error && <div className="error">{ error }</div>}
        { file && <div>{ file.name }</div> }
        { file && <ProgressBar file={file} setFile={setFile} /> }
      </div>
    </form>
  );
};

export default UploadForm;
