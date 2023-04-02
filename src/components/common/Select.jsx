const Select = ({values}) => {
  return(
    <>
      <select name="" id="">
        {values.map((items, index) =>
          <option value={items} key={index}>{items.number}</option>
        )}
      </select>
    </>
  )
}

export default Select;