import { Provider } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Register from "./Pages/Register";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
}
