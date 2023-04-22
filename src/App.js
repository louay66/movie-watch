import { Container } from "react-bootstrap";
import NevBar from "./components/NevBar";
import MovesList from "./components/MovesList";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MovieDetials from "./components/MovieDetials";
/* import { useDispatch } from "react-redux";
import { getAllMovies } from "./redux/action/MovieAction"; */
function App() {
  return (
    <div className="font color-body">
      <NevBar />
      <Container>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<MovesList />} />
            <Route path="/movie/:id" element={<MovieDetials />} />
          </Routes>
        </BrowserRouter>
      </Container>
    </div>
  );
}

export default App;
