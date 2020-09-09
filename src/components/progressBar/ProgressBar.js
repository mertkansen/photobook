import React, { useEffect } from "react";
import "../../styles/ProgressBar.css";
import { motion } from "framer-motion";

import { useStorage } from "../../hooks/storage/useStorage";

const ProgressBar = ({ file, setFile }) => {
  const { url, progress } = useStorage(file);

  useEffect(() => {
    if (url) {
      setFile(null);
    }
  }, [url, setFile]);

  return <motion.div className="progressBar"
    initial={{ width: 0 }}
    animate={{ width: progress + "%"}}
  ></motion.div>;
};

export default ProgressBar;
