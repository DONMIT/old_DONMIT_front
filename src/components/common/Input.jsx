const Input = ({types, value, onChange, txt, label, id, name, step}) => {
  return(
    <>
      {
        label === true ?
        <label htmlFor={id}></label>
        :
        null
      }
      <input type={types === null ? "text" : types} value={value} onChange={onChange} id={id} name={name} step={step}/>
    </>
  )
}

export default Input;