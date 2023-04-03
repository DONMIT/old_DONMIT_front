
const DropFile = ({accept, onChange, refName}) => {
  return(
    <div 
      className="drag_section"
    >
      <input type="file" accept={accept} onChange={onChange} ref={refName}/>
    </div>
  )
}

export default DropFile;