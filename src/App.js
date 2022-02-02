import Navigation from "./Components/Navigation";
import { Routes, Route, Link } from "react-router-dom";
import AddNotes from "./Pages/AddNotes";
import ViewNotes from "./Pages/ViewNotes";
import HomePage from "./Pages/HomePage";

function App() {
  return (
    <div>
      <Navigation></Navigation>


      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/add" element={<AddNotes />} />
        <Route path="/view" element={<ViewNotes />} />
      </Routes>

    </div>
  );
}

export default App;
