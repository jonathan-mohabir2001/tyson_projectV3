
const TextAreaField = (props) => {

  const{handleChange, label,name} = props; 


  return (
    <div>
    
    <label htmlFor={name}> {label}</label>

    <textarea onChange={handleChange}
    name={name}
    rows="4"

    
    >

    </textarea>
    </div>
  )
}

export default TextAreaField