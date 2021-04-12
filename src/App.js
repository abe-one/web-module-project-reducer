import React, { useReducer } from "react";
///////////////////// Components /////////////////////

import TotalDisplay from "./components/TotalDisplay";
import CalcButton from "./components/CalcButton";

///////////////////// States /////////////////////
import reducer, { initialState } from "./reducers/index";
import { applyNumber, changeOperation, clearDisplay } from "./actions/index";

import "./App.css";

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleNum = (e) => {
    dispatch(applyNumber(parseFloat(e.target.innerText)));
  };

  const handleOper = (e) => {
    dispatch(changeOperation(e.target.innerText));
  };

  return (
    <div className="App">
      <nav className="navbar navbar-dark bg-dark">
        <a className="navbar-brand" href="#">
          <img
            alt="red Lambda School logo"
            width="40px"
            src="../Lambda-Logo-Red.png"
          />{" "}
          Lambda Reducer Challenge
        </a>
      </nav>

      <div className="container row mt-5">
        <div className="col-md-12 d-flex justify-content-center">
          <form name="Cal">
            <TotalDisplay value={state.total} />
            <div className="row details">
              <span id="operation">
                <b>Operation:</b> {state.operation}
              </span>
              <span id="memory">
                <b>Memory:</b> {state.memory}
              </span>
            </div>

            <div className="row">
              <CalcButton value={"M+"} />
              <CalcButton value={"MR"} />
              <CalcButton value={"MC"} />
            </div>

            <div className="row">
              <CalcButton value={1} onClick={handleNum} />
              <CalcButton value={2} onClick={handleNum} />
              <CalcButton value={3} onClick={handleNum} />
            </div>

            <div className="row">
              <CalcButton value={4} onClick={handleNum} />
              <CalcButton value={5} onClick={handleNum} />
              <CalcButton value={6} onClick={handleNum} />
            </div>

            <div className="row">
              <CalcButton value={7} onClick={handleNum} />
              <CalcButton value={8} onClick={handleNum} />
              <CalcButton value={9} onClick={handleNum} />
            </div>

            <div className="row">
              <CalcButton value={"+"} onClick={handleOper} />
              <CalcButton value={"*"} onClick={handleOper} />
              <CalcButton value={"-"} onClick={handleOper} />
            </div>

            <div className="row ce_button">
              <CalcButton
                value={"CE"}
                onClick={() => dispatch(clearDisplay())}
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
