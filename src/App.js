import Main from "./Main";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Two from "./Two";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/two" element={<Two />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
