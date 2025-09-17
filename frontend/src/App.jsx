import { Provider } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Register from "./Pages/Register";

export default function App() {
  return;
  <Provider>
    <BrowserRouter>
      <Routes>
        <Route path="register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  </Provider>;
}
