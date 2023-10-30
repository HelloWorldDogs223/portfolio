import { BrowserRouter, Route, Routes } from "react-router-dom";
import LadingPage from "./pages/LandingPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LadingPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
