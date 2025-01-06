import { ErrorBoundary } from "react-error-boundary";
import Navbar from "./components/navbar/Navbar";
import Index from "./components/Index";
import Carousel from "./components/carousel/Carousel";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function App() {
  return (
    <div className="App overflow-hidden">
      <ErrorBoundary fallback={<p>Something went wrong. Try again later.</p>}>
        <ToastContainer />
        <Navbar />
        <Carousel />
        <Index />
      </ErrorBoundary>
    </div>
  );
}

export default App;
