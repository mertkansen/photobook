import React from "react";

const actionTypes = {
  SET_PROGRESS: "SET_PROGRESS",
  SET_ERROR: "SET_ERROR",
  SET_URL: "SET_URL",
};

const storageState = {
  progress: 0,
  error: null,
  url: null,
};

const reducer = (state, action) => {
  switch (action.type) {
    case actionTypes.SET_PROGRESS:
      return {
        ...state,
        progress: action.progress,
      };
    case actionTypes.SET_ERROR:
      return {
        ...state,
        error: action.error,
      };
    case actionTypes.SET_URL:
      return {
        ...state,
        url: action.url,
      };
  }
};

export { actionTypes, storageState, reducer };
