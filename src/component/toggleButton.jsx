import React, { useState, useEffect } from 'react';

const ToggleButton = ({ checked = false, onChange = () => {} }) => {
  const [isOn, setIsOn] = useState(checked);

  useEffect(() => {
    setIsOn(checked);
  }, [checked]);

  const handleToggle = () => {
    const newValue = !isOn;
    setIsOn(newValue);
    onChange(newValue);
  };

  return (
    <div
      onClick={handleToggle}
      className={`w-10 h-5 relative rounded-full cursor-pointer transition-colors duration-300 ${
        isOn ? 'bg-blue-500' : 'bg-hoverC'
      }`}
    >
      <div
        className={`w-5 h-5 absolute rounded-full bg-gray-300 shadow-sm transition-all duration-300 top-0 ${
          isOn ? 'left-[20px]' : 'left-0'
        }`}
      >
        <div className="w-4 h-4 m-[2px] bg-white rounded-full" />
      </div>
    </div>
  );
};

export default ToggleButton;

