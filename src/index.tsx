import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./pages/App";
import Photos from "./pages/Photos";
import reportWebVitals from "./reportWebVitals";
import { QueryClient, QueryClientProvider } from "react-query";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import { ReactQueryDevtools } from "react-query/devtools";

const client = new QueryClient();

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <QueryClientProvider client={client}>
      <BrowserRouter>
        <ReactQueryDevtools initialIsOpen={false} />
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/photos/:rover" element={<Photos />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  </React.StrictMode>
);

reportWebVitals();
