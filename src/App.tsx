import { BrowserRouter, Route, Routes } from "react-router-dom";
import LadingPage from "./pages/LandingPage";
import LoginLading from "./pages/LoginLanding";
import store from "./redux/index";
import { Provider } from "react-redux";
import InitPage from "./pages/InitPage";
import MainPage from "./pages/MainPage";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LadingPage />} />
          <Route path="/login" element={<LoginLading />} />
          <Route path="/init" element={<InitPage />} />
          <Route path="/main" element={<MainPage />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
