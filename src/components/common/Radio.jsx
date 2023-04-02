const Radio = ({txt, name, id, label, type, isChecked}) => {
  return(
    <>
      <input type="radio" name={name} id={id} className={`${type} input_radio`} defaultChecked={isChecked === true ? true : false}/>
      <label htmlFor={id}>{txt}</label>
    </>
  )
}

export default Radio;