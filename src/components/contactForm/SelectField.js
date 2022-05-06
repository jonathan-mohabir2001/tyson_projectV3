const SelectField = (props) => {
  const { label, handleChange, name } = props;

  return (
    <div>
      <label htmlFor={name}> {label}</label>
      <select onChange={handleChange} name={name} defaultValue="service">
        <option value="service" disabled>
          {' '}
          Choose a service
        </option>
        <option value="adultHairCut"> Adult Haircut - $35.00</option>
        <option value="adultHairCutAndBeardTrim">
          {' '}
          Adult Haircut + Beard Trim - $45.00
        </option>
        <option value="cleanShave"> Clean Shave - $25.00</option>
        <option value="beardTrim"> Beard-Trim - $25.00</option>
        <option value="childCut"> Child Haircut - $20.00</option>
      </select>
    </div>
  );
};

export default SelectField;
