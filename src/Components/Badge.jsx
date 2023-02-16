function Badge(props) {
  return (
    <span className='bg-stone-300 md:px-4 px-3 rounded-full py-1 md:font-medium font-normal'>
      {props.text}
    </span>
  )
}

export default Badge
