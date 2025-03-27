import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <>
      <Navbar />
      <div className="m-10 p-5">
        <main>
          {/* This renders the current route's component  */}
          <Outlet />
        </main>
      </div>

      <Footer />
    </>
  );
}

export default App;
