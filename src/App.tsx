import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Brand from "./pages/Brand";
import Collection from "./pages/Collection";
import Test from "./pages/Test";
import Result from "./pages/Result";
import Saved from "./pages/Saved";
import Detail from "./pages/Detail";
import Upcycling from "./pages/Upcycling";
import FindUs from "./pages/FindUs";
import { PerfumeProvider } from "./context/PerfumeContext";
import ScrollToTop from "./components/ScrollToTop";
import "./style.css";

function App() {
  return (
    <PerfumeProvider>
      <BrowserRouter basename="/8cent/">
        <ScrollToTop />
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/brand" element={<Brand />} />
          <Route path="/collection" element={<Collection />} />
          <Route path="/test" element={<Test />} />
          <Route path="/result/:type" element={<Result />} />
          <Route path="/saved" element={<Saved />} />
          <Route path="/detail/:id" element={<Detail />} />
          <Route path="/upcycling" element={<Upcycling />} />
          <Route path="/find-us" element={<FindUs />} />
          <Route
            path="*"
            element={<main className="section">잘못된 페이지입니다.</main>}
          />
        </Routes>
        <Footer />
      </BrowserRouter>
    </PerfumeProvider>
  );
}

export default App;