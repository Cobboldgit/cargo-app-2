import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Sidebar from "../components/Sidebar";
import "../css/main.css";
import { useSelector, useDispatch } from "react-redux";
import { addTodo } from "../context/slices/todoSlice";

function Home() {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch()

  const addtext = () => {
    const a = prompt()
    console.log(a);
    dispatch(addTodo(a))
  }

  return (
    <div className="page_container">
      <div className="nav_container">
        <Sidebar />
      </div>
      <div className="body_container">
        <Container fluid>
          <Row>
            <Col>
              <ul>
                {todos.map((todo) => (
                  <li key={todo.id}>
                    <span>{todo.id}</span> <br/>
                    <span>{todo.text}</span>
                  </li>
                ))}
              </ul>
            </Col>
            <Col>
              <button onClick={addtext}>click me to add text</button>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}

export default Home;
