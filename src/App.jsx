import "./App.css";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import News from "./components/News";
import { Routes, Route } from "react-router-dom";
import NewsListProvider from "./store/news-store";
import NewsCategory from "./components/NewsCategory";
import Footer from "./components/Footer";
import Home from "./components/Home";

function App() {
  return (
    <>
      <NewsListProvider>
        <div className="fixed top-0 -z-50 h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="/news" element={<News />}></Route>
          <Route
            path="general"
            element={<NewsCategory key="general" category="general" />}
          ></Route>
          <Route
            path="sports"
            element={<NewsCategory key="sports" category="sports" />}
          ></Route>
          <Route
            path="technology"
            element={<NewsCategory key="technology" category="technology" />}
          ></Route>
          <Route
            path="health"
            element={<NewsCategory key="health" category="health" />}
          ></Route>
          <Route
            path="science"
            element={<NewsCategory key="science" category="science" />}
          ></Route>
          <Route
            path="business"
            element={<NewsCategory key="business" category="business" />}
          ></Route>
          <Route
            path="entertainment"
            element={
              <NewsCategory key="entertainment" category="entertainment" />
            }
          ></Route>
        </Routes>

        <Footer />
      </NewsListProvider>
    </>
  );
}

export default App;
