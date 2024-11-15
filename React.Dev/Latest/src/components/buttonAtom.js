import React from 'react';

class ButtonAtom extends React.Component { 
  componentDidMount() {
    console.log("Button Component 1 => componentDidMount");
  }
  componentDidUpdate() {
    console.log("Button Component 2 => componentDidUpdate");
  }
  componentWillUnmount() {
    console.log("Button Component 3 => componentWillUnmount");
  }
  render() { 
    return (
      <button onClick={this.props.onClick}>{this.props.label}</button>
    )
  }
}
/*const ButtonAtom = ({ label, bgColor, onClick }) => {
  return <button onClick={onClick}>{label}</button>;
};*/

export default ButtonAtom;