import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Test from "./pages/Test";
import Result from "./pages/Result";
import Saved from "./pages/Saved";
import Detail from "./pages/Detail";
import { PerfumeProvider } from "./context/PerfumeContext";
import "./style.css";

function App() {
  return (
    <PerfumeProvider>
      <BrowserRouter basename="/8cent/">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/test" element={<Test />} />
          <Route path="/result/:type" element={<Result />} />
          <Route path="/saved" element={<Saved />} />
          <Route path="/detail/:id" element={<Detail />} />
          <Route path="*" element={<main className="section">잘못된 페이지입니다.</main>} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </PerfumeProvider>
  );
}

export default App;