import React, { useEffect, useRef, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Sidebar from "../components/Sidebar";
import "../css/main.css";
import { useSelector, useDispatch } from "react-redux";
import VechCard from "../components/VechCard";

function Home() {
  const [next, setNext] = useState(1);
  const a = document.getElementById("dib");

  const vecType = [
    {
      name: "Three-wheeler",
      img: "../images/three-wheeler.png",
      id: 1,
    },
    {
      name: "Truck",
      img: "../images/kia.png",
      id: 2,
    },
    {
      name: "Dump truck",
      img: "../images/dump-truck.png",
      id: 3,
    },
  ];

  useEffect(() => {
    if (next > 1) {
      a.scrollTo(0, 200);
    }
  }, [next]);

  const handleContinue = () => {
    setNext(next + 1);
  };

  return (
    <div className="page_container">
      <div className="nav_container">
        <Sidebar />
      </div>
      <div className="body_container">
        <div id="dib" className="data_input_box">
          {next > 1 && <div className="faded_top"></div>}
          <div className="address">
            <label htmlFor="loc">
              Enter your address to know nearby vehicles
            </label>
            <div className="input">
              <div className="icon"></div>
              <input id="loc" type="text" placeholder="What's your address?" />
              <div className="use_your_loc">
                <div className="loc_icon"></div>
                <div className="text">use current location</div>
              </div>
            </div>
          </div>
          {next > 1 && (
            <div className="vech_type">
              <label>What type of vehicle do your want?</label>
              <div className="vech">
                {vecType.map((item, id) => (
                  <VechCard length={vecType.length} key={id} data={item} />
                ))}
              </div>
            </div>
          )}
          <div className="cont_btn_container">
            <button onClick={handleContinue} className="cont_btn">
              continue
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
