
const InputField = (props) => {
  const { handleChange, label, name, type, value } = props
  return (
    <div className="input-div">
      <label className="label-field" htmlFor= {name}>
        {' '}
        {label}{' '}
      </label>
      <input type={type} onChange={handleChange} value={value} name={name} ></input>
    </div>
  );
};

export default InputField;
