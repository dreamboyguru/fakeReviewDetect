import React from 'react';

const Dropdown = ({ name, selectedValue, handleChange, options }) => {
  return (
    <div className="w-full">
      {/* <label htmlFor="dropdown" className="block text-sm font-medium text-gray-700">Select an option</label> */}
      <select
        name={name}
        id="dropdown"
        value={selectedValue}
        onChange={handleChange}
        className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
      >
        <option value="" disabled>Choose Product type</option>
        {options.map((option, index) => (
          <option key={index} value={option.value}>{option.label}</option>
        ))}
      </select>
      {/* {selectedValue && <p className="mt-2 text-sm text-gray-500">Selected: {selectedValue}</p>} */}
    </div>
  );
};

export default Dropdown;
