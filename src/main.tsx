import "./index.css";
import * as React from "react";
import ReactDOM from "react-dom/client";
import { QueryClientProvider } from "react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import List from "./List";
import Editable from "./Editable";
import queryClient from "./query-client";
import AppContainer from "./components/app-container";

(async () => {
  if (import.meta.env.DEV) {
    return import("./mocks/browser").then(({ default: mocks }) => {
      return mocks.start();
    });
  }
})().then(() => {
  ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <Routes>
            <Route element={<AppContainer />}>
              <Route path="/" element={<List />}>
                <Route path=":id" element={<Editable />} />
              </Route>
            </Route>
          </Routes>
        </BrowserRouter>
      </QueryClientProvider>
    </React.StrictMode>
  );
});
