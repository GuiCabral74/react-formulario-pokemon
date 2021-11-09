const Select = ({ options, ...props }) => {
  return (
    <>
      <select>
        <option>Select</option>
        {options.map((option) => (
          <option value={option}>{option}</option>
        ))}
      </select>
    </>
  );
};

export default Select;
