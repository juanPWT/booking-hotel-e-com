import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Landing from "./features/landing/Page";
import DetailProduct from "./features/product/Page";
import Auth from "./features/auth/Page";
import Page from "./features/chackin/Page";
import jwt from "jwt-decode";
import { userProps } from "../src/api/interface/index";
import React, { useEffect } from "react";
import NotFound from "./utils/pages/NotFound";
import { DetailDataBooking } from "./features/chackin/components/DetailDataBooking";

function App() {
  const [user, setUser] = React.useState<userProps>({
    email: "",
    id: 0,
    name: "",
    contact: 0,
  });

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const decodeToken: any = jwt(token);
      setUser({
        email: decodeToken.email,
        id: decodeToken.uid,
        name: decodeToken.name,
        contact: decodeToken.contact,
      });
    }
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/product/:id" element={<DetailProduct />} />
        <Route path="/auth" element={<Auth />} />
        <Route
          path="/checking/:id"
          element={user.id ? <Page /> : <NotFound />}
        />
        <Route
          path="/detail/:id"
          element={user.id ? <DetailDataBooking /> : <NotFound />}
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
