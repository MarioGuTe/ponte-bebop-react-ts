import { Route, Routes } from "react-router-dom";
import useCustomRef from "./hooks/useCustomRef";
import useScrollToTop from "./hooks/useScrollToTop";
import Header from "./components/Header/Header";
import Home from "./pages/Home/Home";
import BioPage from "./pages/BioPage/BioPage";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";
import Footer from "./components/Footer/Footer";

function App() {
  const refs = useCustomRef();
  useScrollToTop();

  return (
    <>
      <Header refs={refs} />
      <Routes>
        <Route path="/" element={<Home refs={refs} />} />
        <Route path="/bio" element={<BioPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
