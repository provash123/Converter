import React from "react";
import Button from "./Button/Button";
import ClockList from "./ClockList"

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date(), locale: "bn-BD" };
  }
  componentDidMount() {
    this.ClockTimer = setInterval(() => {
      this.tick();
    }, 1000);
  }
  tick() {
    this.setState({ date: new Date() });
  }
  componentWillUnmount() {
    clearInterval(this.ClockTimer);
  }
  handleClicked = (locales) => {
    this.setState({
      locale:locales,
    });
  };
    
  render() {
    const { date, locale } = this.state;
       return (
      <div>
       <h1>
          <span>{date.toLocaleTimeString(locale)}</span>
        </h1>
      {locale === "bn-BD"?<Button change={this.handleClicked} locales="en-US" /> : <Button change={this.handleClicked} locales="bn-BD" />}
       
      </div>
    );
  }
  }


export default Clock;
