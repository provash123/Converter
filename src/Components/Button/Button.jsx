import React from "react";

class Button extends React.Component {
//   shouldComponentUpdate(nextProps) {
//     const { change: currentChange } = this.props;
//     const { change: nextChange } = nextProps;
//     if (currentChange === nextChange) {
//       return false;
//     } else {
//       return true;
//     }
//   }
  render() {
    const { change, locales } = this.props;
    return (
      <div>
        <button type="button" onClick={() => change(locales)}>
          Clicked
        </button>
      </div>
    );
  }
}

export default Button;
