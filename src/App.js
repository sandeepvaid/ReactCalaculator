import "./styles.css";
import React from "react";

class ModifyCalci extends React.Component {
  constructor() {
    super();
    this.state = {
      val: 1
    };
  }

  add2 = () => {
    this.setState((prevState) => {
      return { val: prevState.val + 2 };
    });
  };

  square = () => {
    this.setState((prevState) => {
      return { val: prevState.val * prevState.val };
    });
  };

  double = () => {
    this.setState((prevState) => {
      return { val: prevState.val * 2 };
    });
  };

  divideBy2 = () => {
    this.setState((prevState) => {
      return { val: prevState.val / 2 };
    });
  };

  subtractBy2 = () => {
    this.setState((prevState) => {
      return { val: prevState.val - 2 };
    });
  };

  render() {
    const { val } = this.state;
    return (
      <div className="App">
        <h1>Calci</h1>

        <div style={{ fontSize: 30, fontWeight: 20 }}>{val}</div>

        <div className="options">
          <button onClick={this.add2}>Add2</button>

          <button onClick={this.square}>Square</button>

          <button onClick={this.double}>Double</button>

          <button onClick={this.divideBy2}>Divide by 2</button>

          <button onClick={this.subtractBy2}>Subtract by 2</button>
        </div>
      </div>
    );
  }
}

export default ModifyCalci;
