import React, { useState, useEffect } from "react";
import { db } from "../../db/firebase";

export const useFirestore = (collection) => {
  const [docs, setDocs] = useState([]);

  useEffect(() => {
    const unsubscribe = db
      .collection(collection)
      .orderBy("timestamp", "desc")
      .onSnapshot((snap) =>
        setDocs(
          snap.docs.map((doc) => ({
            id: doc.id,
            image: doc.data(),
          }))
        )
      );

    return () => unsubscribe();
  }, [collection]);

  return { docs };
};
