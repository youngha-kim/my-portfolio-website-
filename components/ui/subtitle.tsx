const Subtitle = ({title, txtColor}) => {
  return ( 
    <>
    <div className="underline-offest-auto text-5xl font-black text-center">
      <p className={txtColor}>{title}</p>
    </div>
    </>
  )
}

export default Subtitle