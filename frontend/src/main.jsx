import { ChakraProvider } from "@chakra-ui/react";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

// Wrap your app with ChakraProvider
ReactDOM.createRoot(document.getElementById("root")).render(
    <App />
  </ChakraProvider>
);
