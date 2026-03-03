import { Routes, Route } from "react-router-dom";
import { Home } from "./Pages/Home";
import Navbar from "./Pages/Navbar";
import Footer from "./Pages/Footer";



function App() {
  return (
    <div className="flex flex-col min-h-screen">

      <Navbar />

      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </main>

      <Footer />

    </div>
  );
}

export default App;