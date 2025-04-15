import { Toaster } from "react-hot-toast";
import "./App.css";
import "./index.css";
import  AppRoutes  from "./routes/Routes";

function App() {
  return (
    <>
      <AppRoutes />
      <Toaster reverseOrder={false} />
    </>
  );
}

export default App;
