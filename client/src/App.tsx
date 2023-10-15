import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Landing from "./features/landing/Page";
import DetailProduct from "./features/product/Page";
import Auth from "./features/auth/Page";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/product/:id" element={<DetailProduct />} />
        <Route path="/auth" element={<Auth />} />
      </Routes>
    </Router>
  );
}

export default App;
