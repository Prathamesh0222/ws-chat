import React from 'react';

interface CheckboxProps {
  label: string;
  value: string;
  checked: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Checkbox: React.FC<CheckboxProps> = ({ label, value, checked, onChange }) => {
  return (
   
    <label className="flex justify-center p-4">
      <input
      className='w-6 h-6 text-blue-600 cursor-pointer border-gray-300 rounded focus:ring-blue-500'
        type="checkbox"
        value={value}
        checked={checked}
        onChange={onChange}
      />
      <span className=" font-bold text-white pl-2">{label}</span>
    </label>
   
  );
};

export default Checkbox;