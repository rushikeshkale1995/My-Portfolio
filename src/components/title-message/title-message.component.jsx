import React from "react";
import Typewriter from "typewriter-effect";
import styled from "styled-components";
import "./title-message.style.css"

const MyTitleMessage = styled.h1`
  position: absolute;
  width: 100%;
  top: 22rem;
  z-index: 1;
  margin-top: -125px;
  text-align: center;

  strong {
    font-size: 1.25em;
  }
  div {
    color: #ffff;

    text-shadow: 0px 2px 5px rgba(0, 0, 0, 0.4);
    font-weight: 100;
    letter-spacing: 7px;

    .main {
      font-size: 40px;
    }
    .main span h2{
      font-size: 50px;
    }

    .sub {
      font-size: 27px;
      letter-spacing: 2px;
      font-weight: bold;
    }
  }
`;

const TitleMessage = () => (
  <MyTitleMessage>
    <div className="titleMessage" >
      <div className="heading">
        <div className="main text-center mb-3">
          Hi, I am
          <span>
            <h2>Rushikesh Ramchandra Kale</h2>
          </span>
        </div>
        <div className="sub">
          <Typewriter
            options={{
              strings: ["Web Developer", "Programmer", "Learner"],
              autoStart: true,
              loop: true,
              delay: 100,
            }}
          />
        </div>
      </div>
    </div>
  </MyTitleMessage>
);

export default TitleMessage;
