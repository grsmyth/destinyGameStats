import React, { useReducer, useEffect } from "react";
import { Context } from "./Context";

export const manifestReducer = (_, manifest) => manifest;

export const initialState =
  typeof window !== "undefined"
    ? JSON.parse(localStorage.getItem("Manifest")) || {}
    : {};

// eslint-disable-next-line react/prop-types
const ContextProvider = ({ children, value }) => {
  return <Context.Provider value={value}>{children}</Context.Provider>;
};

export default ContextProvider;
