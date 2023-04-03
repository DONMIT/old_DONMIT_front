const Radio = ({txt, name, id, label, type, value, isChecked, onChange}) => {
  return(
    <>
      <input type="radio" name={name} id={id} className={`${type} input_radio`} value={value} onChange={onChange} defaultChecked={isChecked === true ? true : false}/>
      <label htmlFor={id}>{txt}</label>
    </>
  )
}

export default Radio;