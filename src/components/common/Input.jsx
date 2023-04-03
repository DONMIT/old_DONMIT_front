const Input = ({styles, types, value, defaultValue, onChange, txt, label, id, name, readOnly, step}) => {
  console.log(defaultValue)
  return(
    <>
      {
        label === true ?
        <label htmlFor={id}></label>
        :
        null
      }
      <input className={`${styles} ${readOnly === true ? "read_only" : ""}`} type={types === null ? "text" : types} value={value} defaultValue={defaultValue} onChange={onChange} id={id} name={name} readOnly={readOnly === true ? true : false} step={step}/>
    </>
  )
}

export default Input;