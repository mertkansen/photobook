import React, { useReducer, useEffect } from "react";
import { storage, db, timestamp } from "../../db/firebase";
import { actionTypes, storageState, reducer } from "./storageReducer";

const useStorage = (file) => {
  const [{ url, error, progress }, dispatch] = useReducer(
    reducer,
    storageState
  );

  useEffect(() => {
    // References
    const storageRef = storage.ref(file.name);
    const collectionRef = db.collection("images");

    storageRef.put(file).on(
      "state_changed",
      (snap) => {
        let percentageOfUploadProgress =
          (snap.bytesTransferred / snap.totalBytes) * 100;
        dispatch({
          type: actionTypes.SET_PROGRESS,
          progress: percentageOfUploadProgress,
        });
      },
      (err) => {
        dispatch({
          type: actionTypes.SET_ERROR,
          error: err,
        });
      },
      async () => {
        const url = await storageRef.getDownloadURL();
        dispatch({
          type: actionTypes.SET_URL,
          url: url,
        });

        collectionRef.add({
          timestamp: timestamp(),
          imageURL: url,
        });
      }
    );
  }, [file]);

  return { progress, url, error };
};

export { useStorage };
