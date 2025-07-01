import "./css/bootstrap.css";
import "./css/styles.css";
import "./js/bootstrap.js";
import { Routes, Route } from "react-router-dom";

import {
  Header,
  Iphone,
  Alert,
  First,
  Second,
  Third,
  Fourth,
  Fifth,
  Sixth,
  Youtube,
  Main,
  Footer,
  Four04,
} from "./sections/index.js";

const App = () => {
  return (
    <>
      {/* you can also use the sharedLayout........ */}
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/iphone" element={<Iphone />} />
        <Route path="/alert" element={<Alert />} />
        <Route path="/ipad" element={<First />} />
        <Route path="/mac" element={<Second />} />
        <Route path="/third" element={<Third />} />
        <Route path="/fourth" element={<Fourth />} />
        <Route path="/fifth" element={<Fifth />} />
        <Route path="/sixth" element={<Sixth />} />
        <Route path="/youtube" element={<Youtube />} />
        <Route path="*" element={<Four04 />} />
      </Routes>

      <Footer />
    </>
  );
};

export default App;
