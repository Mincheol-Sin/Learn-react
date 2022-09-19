import { useEffect, useState } from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import "./App.css";
import data from "./data.js";
import { Routes, Route, useNavigate } from "react-router-dom";
import Detail from "./pages/Detail";
import Card from "./components/Card";
import axios, { AxiosError } from "axios";
import Cart from "./pages/Cart";

function App() {
  let [shoes, setShoes] = useState(data);
  let navigate = useNavigate();

  useEffect(() => {
    localStorage.setItem("watched", JSON.stringify([]));
  }, []);

  return (
    <div className="App">
      <Navbar bg="light" variant="light">
        <Container>
          <Navbar.Brand href="/">ShoeShop</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link
              onClick={() => {
                navigate("/");
              }}
            >
              Home
            </Nav.Link>
            <Nav.Link
              onClick={() => {
                navigate("/detail/0");
              }}
            >
              Details
            </Nav.Link>
            <Nav.Link
              onClick={() => {
                navigate("/Cart");
              }}
            >
              cart
            </Nav.Link>
          </Nav>
          <Nav className="ms-auto">반가워요 kim</Nav>
        </Container>
      </Navbar>

      <Routes>
        <Route
          path="/"
          element={
            <>
              <div className="main-bg"></div>
              <div className="container">
                <div className="row">
                  {shoes.map((a, i) => {
                    return <Card shoes={shoes[i]} i={i} key={i} />;
                  })}
                </div>
              </div>
              <button
                onClick={() => {
                  axios
                    .get("https://codingapple1.github.io/shop/data2.json")
                    .then((result) => {
                      let copy = [...shoes, ...result.data];
                      setShoes(copy);
                    })
                    .catch(() => {
                      console.log("실패함ㅅㄱ");
                    });
                }}
              >
                더보기
              </button>
            </>
          }
        />

        <Route path="/detail/:id" element={<Detail shoes={shoes} />} />

        <Route path="/cart" element={<Cart />} />
      </Routes>
    </div>
  );
}

export default App;
