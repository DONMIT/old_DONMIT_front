const Button = ({txt, event}) => {
  return(
    <>
      <button onClick={event}>{txt}</button>
    </>
  )
}

export default Button;