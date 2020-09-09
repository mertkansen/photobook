import React from "react";
import "../../styles/ImageGrid.css";
import { useFirestore } from "../../hooks/firestore/useFirestore";
import { motion } from "framer-motion";

const ImageGrid = ({ setSelectedImage }) => {
  const { docs } = useFirestore("images");

  return (
    <div className="imageGrid">
      {docs &&
        docs.map(({ id, image }) => (
          <motion.div
            onClick={() => setSelectedImage(image.imageURL)}
            className="imageGrid__img-wrap"
            key={id}
            layout
            whileHover={{ opacity: 1 }}
          >
            <motion.img
              src={image.imageURL}
              alt="uploaded pic"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
            />
          </motion.div>
        ))}
    </div>
  );
};

export default ImageGrid;
