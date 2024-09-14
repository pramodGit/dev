import React from 'react';

const ButtonAtom = ({ label, bgColor, onClick }) => {
  return <button onClick={onClick}>{label}</button>;
};

export default ButtonAtom;