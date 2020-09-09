import React, { useState } from "react";
import "../../styles/App.css";

import { Header, UploadForm, ImageGrid, Modal } from "../";

const App = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  return (
    <div className="app">
      <Header />
      <UploadForm />
      <ImageGrid setSelectedImage={setSelectedImage} />
      {selectedImage && (
        <Modal
          setSelectedImage={setSelectedImage}
          selectedImage={selectedImage}
        />
      )}
    </div>
  );
};

export default App;
