import React from "react";
import { useState } from "react";
import styled from "styled-components";

const TransformText = () => {
  const [dark, setDark] = useState({
    color: "black",
    backgroundColor: "white",
  });
  const [text, setText] = useState("Here you can see your wanted text");
  const handleChange = (e) => {
    setText(e.target.value);
  };
  const handleClick = (e) => {
    e.preventDefault();
    let newElement = text.toUpperCase();
    setText(newElement);
  };
  const handleClear = () => {
    setText("");
  };
  const [btn, setBtn] = useState("Enable dark mode");
  const handleChangeColor = () => {
    // eslint-disable-next-line eqeqeq
    if (dark.color == "black") {
      setDark({
        color: "white",
        backgroundColor: "black",
      });
      setBtn("Enable normal mode");
    } else {
      setDark({
        color: "black",
        backgroundColor: "white",
      });
      setBtn("Enable dark mode");
    }
  };
  return (
    <Wrapper className="container">
      <div>
        <h2>This is a Text Transform app which is build by React js</h2>
        <p>{text}</p>
        <form onClick={handleClick} className="form">
          <textarea onChange={handleChange} cols="100" rows="10"></textarea>{" "}
          <br />
          <div className="ip">
            <input type="submit" value="UPPERCASE" /> <br />
            <button type="submit" onClick={handleClear} value="lowercases">
              clear
            </button>
          </div>
        </form>
        <div className="cls">
          <p>Mahesh</p>
        </div>
        <button onClick={handleChangeColor}>{btn}</button>
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  .cls {
    background-color: black;
    height: 20vh;
    width: 50vh;
  }
  h2 {
    text-align: center;
    font-weight: 700;
  }
  p {
    text-align: center;
    margin-top: 1rem;
  }
  .container {
    max-width: 100vw;
    max-height: 100vh;
  }
  textarea {
  }
  .form {
    text-align: center;
    margin-top: 5rem;
  }
  .ip {
    display: flex;
    justify-content: center;
    gap: 2rem;
  }
`;
export default TransformText;
