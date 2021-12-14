import React from "react";
import BoilingVerdict from "./BoilingVerdict";
import TemperatureInput from "./TemperatureInput";

import { toCelcius, toFahrhenheit, Convert } from "../Lib/Converter";

class Calculator extends React.Component {
  state = {
    temperature: "",
    scale: "",
  };
  handleTemperatureCheck = (e, scale) => {
    this.setState({
      temperature: e.target.value,
      scale,
    });
  };
  render() {
    const { temperature, scale } = this.state;
    const celcius =
      scale === "f" ? Convert(temperature, toCelcius) : temperature;
    const fahrenheit =
      scale === "c" ? Convert(temperature, toFahrhenheit) : temperature;
    return (
      <div>
        <TemperatureInput
          temperature={celcius}
          handleTemperatureCheck={this.handleTemperatureCheck}
          scale="c"
        />
        <TemperatureInput
          temperature={fahrenheit}
          handleTemperatureCheck={this.handleTemperatureCheck}
          scale="f"
        />
        <BoilingVerdict celcius={parseFloat(temperature)} />
      </div>
    );
  }
}

export default Calculator;
