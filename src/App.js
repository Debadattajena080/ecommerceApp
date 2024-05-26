import Navbar from "./components/navbar/Navbar";
import Index from "./components/Index";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function App() {
  return (
    <div className="App overflow-hidden">
      <ToastContainer />
      <Navbar />
      <Index />
    </div>
  );
}

export default App;
