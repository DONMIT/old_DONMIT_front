const Select = ({arrItem, types, value, txt, onChange, id, name}) => {
  return(
    <>
      <select name={name} id={id} onChange={onChange}>
        {arrItem.map((items, index) =>
          <option value={items.value} key={index}>{items.number}</option>
        )}
      </select>
    </>
  )
}

export default Select;